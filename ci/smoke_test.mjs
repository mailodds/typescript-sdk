// SDK smoke test -- validates build-from-source and API integration.
const API_URL = "https://api.mailodds.com";
const API_KEY = process.env.MAILODDS_TEST_KEY;
if (!API_KEY) { console.error("ERROR: MAILODDS_TEST_KEY not set"); process.exit(1); }

// Prove the SDK is importable (build succeeded)
await import("../dist/index.js");

let passed = 0;
let failed = 0;

const TEST_CASES = [
  ["test@deliverable.mailodds.com", "valid", "accept", null],
  ["test@invalid.mailodds.com", "invalid", "reject", "smtp_rejected"],
  ["test@risky.mailodds.com", "catch_all", "accept_with_caution", "catch_all_detected"],
  ["test@disposable.mailodds.com", "do_not_mail", "reject", "disposable"],
  ["test@role.mailodds.com", "do_not_mail", "reject", "role_account"],
  ["test@timeout.mailodds.com", "unknown", "retry_later", "smtp_unreachable"],
  ["test@freeprovider.mailodds.com", "valid", "accept", null],
];

function check(label, expected, actual) {
  if (expected === actual) { passed++; }
  else { failed++; console.log(`  FAIL: ${label} expected=${expected} got=${actual}`); }
}

async function apiCall(email, key = API_KEY) {
  const resp = await fetch(`${API_URL}/v1/validate`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return { status: resp.status, data: await resp.json() };
}

// Phase 1: validate all test domains
for (const [email, expStatus, expAction, expSub] of TEST_CASES) {
  const domain = email.split("@")[1].split(".")[0];
  try {
    const { data: r } = await apiCall(email);
    check(`${domain}.status`, expStatus, r.status);
    check(`${domain}.action`, expAction, r.action);
    check(`${domain}.sub_status`, expSub, r.sub_status ?? null);
    check(`${domain}.test_mode`, true, r.test_mode);
  } catch (e) {
    failed++;
    console.log(`  FAIL: ${domain} raised ${e.message}`);
  }
}

// Phase 2: error handling
const { status: s401 } = await apiCall("test@deliverable.mailodds.com", "invalid_key");
check("error.401", 401, s401);

const resp400 = await fetch(`${API_URL}/v1/validate`, {
  method: "POST",
  headers: { "Authorization": `Bearer ${API_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({}),
});
check("error.400", true, [400, 422].includes(resp400.status));

const total = passed + failed;
console.log(`\n${failed === 0 ? "PASS" : "FAIL"}: TypeScript SDK (${passed}/${total})`);
process.exit(failed === 0 ? 0 : 1);
