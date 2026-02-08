// SDK smoke test -- validates build-from-source and API integration using the SDK client.
const API_KEY = process.env.MAILODDS_TEST_KEY;
if (!API_KEY) { console.error("ERROR: MAILODDS_TEST_KEY not set"); process.exit(1); }

const { Configuration, EmailValidationApi, ResponseError } = await import("../dist/index.js");

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

const api = new EmailValidationApi(new Configuration({ basePath: "https://api.mailodds.com", accessToken: API_KEY }));

for (const [email, expStatus, expAction, expSub] of TEST_CASES) {
  const domain = email.split("@")[1].split(".")[0];
  try {
    const resp = await api.validateEmail({ validateRequest: { email } });
    check(`${domain}.status`, expStatus, resp.status);
    check(`${domain}.action`, expAction, resp.action);
    check(`${domain}.sub_status`, expSub, resp.subStatus ?? null);
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

const total = passed + failed;
console.log(`\n${failed === 0 ? "PASS" : "FAIL"}: TypeScript SDK (${passed}/${total})`);
process.exit(failed === 0 ? 0 : 1);
