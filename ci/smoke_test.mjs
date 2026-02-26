// SDK smoke test -- validates build-from-source and API integration using the SDK client.
const API_KEY = process.env.MAILODDS_TEST_KEY;
if (!API_KEY) { console.error("ERROR: MAILODDS_TEST_KEY not set"); process.exit(1); }

const {
  Configuration,
  EmailValidationApi,
  BulkValidationApi,
  SuppressionListsApi,
  ValidationPoliciesApi,
  SystemApi,
  SendingDomainsApi,
  SubscriberListsApi,
  EmailSendingApi,
  ResponseError,
} = await import("../dist/index.js");

let passed = 0;
let failed = 0;
const ts = String(Date.now());

// [email, status, action, sub_status, free_provider, disposable, role_account, mx_found, depth]
const TEST_CASES = [
  ["test@deliverable.mailodds.com", "valid", "accept", null, false, false, false, true, "enhanced"],
  ["test@invalid.mailodds.com", "invalid", "reject", "smtp_rejected", false, false, false, true, "enhanced"],
  ["test@risky.mailodds.com", "catch_all", "accept_with_caution", "catch_all_detected", false, false, false, true, "enhanced"],
  ["test@disposable.mailodds.com", "do_not_mail", "reject", "disposable", false, true, false, true, "enhanced"],
  ["test@role.mailodds.com", "do_not_mail", "reject", "role_account", false, false, true, true, "enhanced"],
  ["test@timeout.mailodds.com", "unknown", "retry_later", "smtp_unreachable", false, false, false, true, "enhanced"],
  ["test@freeprovider.mailodds.com", "valid", "accept", null, true, false, false, true, "enhanced"],
];

function check(label, expected, actual) {
  if (expected === actual) { passed++; }
  else { failed++; console.log(`  FAIL: ${label} expected=${expected} got=${actual}`); }
}

const cfg = new Configuration({ basePath: "https://api.mailodds.com", accessToken: API_KEY });
const api = new EmailValidationApi(cfg);

for (const [email, expStatus, expAction, expSub, expFree, expDisp, expRole, expMx, expDepth] of TEST_CASES) {
  const domain = email.split("@")[1].split(".")[0];
  try {
    const resp = await api.validateEmail({ validateRequest: { email } });
    check(`${domain}.status`, expStatus, resp.status);
    check(`${domain}.action`, expAction, resp.action);
    check(`${domain}.sub_status`, expSub, resp.subStatus ?? null);
    check(`${domain}.free_provider`, expFree, resp.freeProvider);
    check(`${domain}.disposable`, expDisp, resp.disposable);
    check(`${domain}.role_account`, expRole, resp.roleAccount);
    check(`${domain}.mx_found`, expMx, resp.mxFound);
    check(`${domain}.depth`, expDepth, resp.depth);
    if (!resp.processedAt) { failed++; console.log(`  FAIL: ${domain}.processed_at is empty`); }
    else { passed++; }
  } catch (e) {
    failed++;
    console.log(`  FAIL: ${domain} raised ${e.message}`);
  }
}

// Error handling: 401 with bad key
try {
  const badApi = new EmailValidationApi(new Configuration({ basePath: "https://api.mailodds.com", accessToken: "invalid_key" }));
  await badApi.validateEmail({ validateRequest: { email: "test@deliverable.mailodds.com" } });
  failed++;
  console.log("  FAIL: error.401 no exception raised");
} catch (e) {
  if (e instanceof ResponseError && e.response.status === 401) { passed++; }
  else { failed++; console.log(`  FAIL: error.401 wrong error: ${e.message}`); }
}

// Error handling: 400/422 with missing email
try {
  await api.validateEmail({ validateRequest: { email: "" } });
  failed++;
  console.log("  FAIL: error.400 no exception raised");
} catch (e) {
  if (e instanceof ResponseError && [400, 422].includes(e.response.status)) { passed++; }
  else { failed++; console.log(`  FAIL: error.400 wrong error: ${e.message}`); }
}

// --- Bulk Validation ---
const bulkApi = new BulkValidationApi(cfg);
let jobId = null;
try {
  const jobResp = await bulkApi.createJob({ createJobRequest: { emails: ["test@deliverable.mailodds.com"] } });
  check("bulk.create.id_prefix", true, jobResp.job.id.startsWith("job_"));
  check("bulk.create.status", "pending", jobResp.job.status);
  jobId = jobResp.job.id;

  const getResp = await bulkApi.getJob({ jobId });
  check("bulk.get.id", jobId, getResp.job.id);

  const delResp = await bulkApi.deleteJob({ jobId });
  check("bulk.delete", true, delResp.deleted);
  jobId = null;
} catch (e) {
  failed++;
  console.log(`  FAIL: bulk raised ${e.message}`);
} finally {
  if (jobId) {
    try { await bulkApi.deleteJob({ jobId }); } catch (_) { /* cleanup */ }
  }
}

// --- Suppression Lists ---
const suppApi = new SuppressionListsApi(cfg);
const testEmail = `smoketest-${ts}@example.com`;
try {
  const addResp = await suppApi.addSuppression({
    addSuppressionRequest: { entries: [{ type: "email", value: testEmail }] },
  });
  check("supp.add.count", true, addResp.added >= 1);

  const checkResp = await suppApi.checkSuppression({
    checkSuppressionRequest: { email: testEmail },
  });
  check("supp.check.suppressed", true, checkResp.suppressed);

  const statsResp = await suppApi.getSuppressionStats();
  check("supp.stats.has_total", true, statsResp.total !== undefined);

  const rmResp = await suppApi.removeSuppression({
    removeSuppressionRequest: { entries: [testEmail] },
  });
  check("supp.remove.count", true, rmResp.removed >= 1);
} catch (e) {
  failed++;
  console.log(`  FAIL: supp raised ${e.message}`);
  try {
    await suppApi.removeSuppression({ removeSuppressionRequest: { entries: [testEmail] } });
  } catch (_) { /* cleanup */ }
}

// --- Validation Policies ---
const polApi = new ValidationPoliciesApi(cfg);
let policyId = null;

// Cleanup leftover smoke policies (free plan allows only 1)
try {
  const existing = await polApi.listPolicies({});
  for (const p of existing.policies || []) {
    if (p.name && p.name.startsWith("smoke")) {
      try { await polApi.deletePolicy({ policyId: p.id }); } catch (_) {}
    }
  }
} catch (_) {}
try {
  const presetsResp = await polApi.getPolicyPresets();
  check("policy.presets.count", true, presetsResp.presets.length > 0);

  const preset = presetsResp.presets[0];
  const createResp = await polApi.createPolicyFromPreset({
    createPolicyFromPresetRequest: { presetId: preset.id, name: `smoke-${ts}` },
  });
  check("policy.create.id", true, createResp.policy.id != null);
  policyId = createResp.policy.id;

  const delResp = await polApi.deletePolicy({ policyId });
  check("policy.delete", true, delResp.deleted);
  policyId = null;
} catch (e) {
  failed++;
  console.log(`  FAIL: policy raised ${e.message}`);
} finally {
  if (policyId) {
    try { await polApi.deletePolicy({ policyId }); } catch (_) { /* cleanup */ }
  }
}

// --- System ---
try {
  const noAuthCfg = new Configuration({ basePath: "https://api.mailodds.com" });
  const sysNoAuth = new SystemApi(noAuthCfg);
  const health = await sysNoAuth.healthCheck();
  check("system.health", "healthy", health.status);
} catch (e) {
  failed++;
  console.log(`  FAIL: system.health raised ${e.message}`);
}

try {
  const sysApi = new SystemApi(cfg);
  const telem = await sysApi.getTelemetrySummary();
  check("system.telemetry", true, telem != null);
} catch (e) {
  failed++;
  console.log(`  FAIL: system.telemetry raised ${e.message}`);
}

// --- Sending Domains ---
const domApi = new SendingDomainsApi(cfg);
let domainId = null;
try {
  const listResp = await domApi.listSendingDomains();
  check("domains.list", true, Array.isArray(listResp.domains));

  const createResp = await domApi.createSendingDomain({
    createSendingDomainRequest: { domain: `smoke-${ts}.example.com` },
  });
  check("domains.create.id", true, createResp.domain.id != null);
  domainId = createResp.domain.id;

  const delResp = await domApi.deleteSendingDomain({ domainId });
  check("domains.delete", true, delResp.deleted);
  domainId = null;
} catch (e) {
  failed++;
  console.log(`  FAIL: domains raised ${e.message}`);
} finally {
  if (domainId) {
    try { await domApi.deleteSendingDomain({ domainId }); } catch (_) { /* cleanup */ }
  }
}

// --- Subscriber Lists ---
const listsApi = new SubscriberListsApi(cfg);
let listId = null;
try {
  const createResp = await listsApi.createList({
    createListRequest: { name: `smoke-${ts}` },
  });
  check("lists.create.id", true, createResp.list.id != null);
  listId = createResp.list.id;

  const allLists = await listsApi.getLists();
  check("lists.list.count", true, allLists.lists.length > 0);

  const subResp = await listsApi.subscribe({
    listId,
    subscribeRequest: { email: `smoke-${ts}@example.com` },
  });
  check("lists.subscribe.id", true, subResp.subscriber.id != null);

  const delResp = await listsApi.deleteList({ listId });
  check("lists.delete", true, delResp.deleted);
  listId = null;
} catch (e) {
  failed++;
  console.log(`  FAIL: lists raised ${e.message}`);
} finally {
  if (listId) {
    try { await listsApi.deleteList({ listId }); } catch (_) { /* cleanup */ }
  }
}

// --- Email Sending (import-only) ---
check("sending.class_exists", true, typeof EmailSendingApi === "function");

const total = passed + failed;
console.log(`\n${failed === 0 ? "PASS" : "FAIL"}: TypeScript SDK (${passed}/${total})`);
process.exit(failed === 0 ? 0 : 1);
