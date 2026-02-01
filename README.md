# @mailodds/sdk@0.1.0

A TypeScript SDK client for the api.mailodds.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @mailodds/sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { CancelJobRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkValidationApi(config);

  const body = {
    // string
    jobId: jobId_example,
  } satisfies CancelJobRequest;

  try {
    const data = await api.cancelJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.mailodds.com/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BulkValidationApi* | [**cancelJob**](docs/BulkValidationApi.md#canceljob) | **POST** /v1/jobs/{job_id}/cancel | Cancel a job
*BulkValidationApi* | [**createJob**](docs/BulkValidationApi.md#createjoboperation) | **POST** /v1/jobs | Create bulk validation job (JSON)
*BulkValidationApi* | [**createJobFromS3**](docs/BulkValidationApi.md#createjobfroms3operation) | **POST** /v1/jobs/upload/s3 | Create job from S3 upload
*BulkValidationApi* | [**createJobUpload**](docs/BulkValidationApi.md#createjobupload) | **POST** /v1/jobs/upload | Create bulk validation job (file upload)
*BulkValidationApi* | [**deleteJob**](docs/BulkValidationApi.md#deletejob) | **DELETE** /v1/jobs/{job_id} | Delete a job
*BulkValidationApi* | [**getJob**](docs/BulkValidationApi.md#getjob) | **GET** /v1/jobs/{job_id} | Get job status
*BulkValidationApi* | [**getJobResults**](docs/BulkValidationApi.md#getjobresults) | **GET** /v1/jobs/{job_id}/results | Get job results
*BulkValidationApi* | [**getPresignedUpload**](docs/BulkValidationApi.md#getpresigneduploadoperation) | **POST** /v1/jobs/upload/presigned | Get S3 presigned upload URL
*BulkValidationApi* | [**listJobs**](docs/BulkValidationApi.md#listjobs) | **GET** /v1/jobs | List validation jobs
*EmailValidationApi* | [**validateEmail**](docs/EmailValidationApi.md#validateemail) | **POST** /v1/validate | Validate single email
*SuppressionListsApi* | [**addSuppression**](docs/SuppressionListsApi.md#addsuppressionoperation) | **POST** /v1/suppression | Add suppression entries
*SuppressionListsApi* | [**checkSuppression**](docs/SuppressionListsApi.md#checksuppressionoperation) | **POST** /v1/suppression/check | Check suppression status
*SuppressionListsApi* | [**getSuppressionStats**](docs/SuppressionListsApi.md#getsuppressionstats) | **GET** /v1/suppression/stats | Get suppression statistics
*SuppressionListsApi* | [**listSuppression**](docs/SuppressionListsApi.md#listsuppression) | **GET** /v1/suppression | List suppression entries
*SuppressionListsApi* | [**removeSuppression**](docs/SuppressionListsApi.md#removesuppressionoperation) | **DELETE** /v1/suppression | Remove suppression entries
*SystemApi* | [**getTelemetrySummary**](docs/SystemApi.md#gettelemetrysummary) | **GET** /v1/telemetry/summary | Get validation telemetry
*SystemApi* | [**healthCheck**](docs/SystemApi.md#healthcheck) | **GET** /health | Health check
*ValidationPoliciesApi* | [**addPolicyRule**](docs/ValidationPoliciesApi.md#addpolicyrule) | **POST** /v1/policies/{policy_id}/rules | Add rule to policy
*ValidationPoliciesApi* | [**createPolicy**](docs/ValidationPoliciesApi.md#createpolicyoperation) | **POST** /v1/policies | Create policy
*ValidationPoliciesApi* | [**createPolicyFromPreset**](docs/ValidationPoliciesApi.md#createpolicyfrompresetoperation) | **POST** /v1/policies/from-preset | Create policy from preset
*ValidationPoliciesApi* | [**deletePolicy**](docs/ValidationPoliciesApi.md#deletepolicy) | **DELETE** /v1/policies/{policy_id} | Delete policy
*ValidationPoliciesApi* | [**deletePolicyRule**](docs/ValidationPoliciesApi.md#deletepolicyrule) | **DELETE** /v1/policies/{policy_id}/rules/{rule_id} | Delete rule
*ValidationPoliciesApi* | [**getPolicy**](docs/ValidationPoliciesApi.md#getpolicy) | **GET** /v1/policies/{policy_id} | Get policy
*ValidationPoliciesApi* | [**getPolicyPresets**](docs/ValidationPoliciesApi.md#getpolicypresets) | **GET** /v1/policies/presets | Get policy presets
*ValidationPoliciesApi* | [**listPolicies**](docs/ValidationPoliciesApi.md#listpolicies) | **GET** /v1/policies | List policies
*ValidationPoliciesApi* | [**testPolicy**](docs/ValidationPoliciesApi.md#testpolicyoperation) | **POST** /v1/policies/test | Test policy evaluation
*ValidationPoliciesApi* | [**updatePolicy**](docs/ValidationPoliciesApi.md#updatepolicyoperation) | **PUT** /v1/policies/{policy_id} | Update policy


### Models

- [AddPolicyRule201Response](docs/AddPolicyRule201Response.md)
- [AddSuppressionRequest](docs/AddSuppressionRequest.md)
- [AddSuppressionRequestEntriesInner](docs/AddSuppressionRequestEntriesInner.md)
- [AddSuppressionResponse](docs/AddSuppressionResponse.md)
- [CheckSuppressionRequest](docs/CheckSuppressionRequest.md)
- [CreateJobFromS3Request](docs/CreateJobFromS3Request.md)
- [CreateJobRequest](docs/CreateJobRequest.md)
- [CreatePolicyFromPresetRequest](docs/CreatePolicyFromPresetRequest.md)
- [CreatePolicyRequest](docs/CreatePolicyRequest.md)
- [DeleteJob200Response](docs/DeleteJob200Response.md)
- [DeletePolicy200Response](docs/DeletePolicy200Response.md)
- [DeletePolicyRule200Response](docs/DeletePolicyRule200Response.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [GetPresignedUploadRequest](docs/GetPresignedUploadRequest.md)
- [HealthCheck200Response](docs/HealthCheck200Response.md)
- [Job](docs/Job.md)
- [JobListResponse](docs/JobListResponse.md)
- [JobResponse](docs/JobResponse.md)
- [JobSummary](docs/JobSummary.md)
- [Pagination](docs/Pagination.md)
- [Policy](docs/Policy.md)
- [PolicyListResponse](docs/PolicyListResponse.md)
- [PolicyListResponseLimits](docs/PolicyListResponseLimits.md)
- [PolicyPresetsResponse](docs/PolicyPresetsResponse.md)
- [PolicyPresetsResponsePresetsInner](docs/PolicyPresetsResponsePresetsInner.md)
- [PolicyResponse](docs/PolicyResponse.md)
- [PolicyRule](docs/PolicyRule.md)
- [PolicyRuleAction](docs/PolicyRuleAction.md)
- [PolicyTestResponse](docs/PolicyTestResponse.md)
- [PresignedUploadResponse](docs/PresignedUploadResponse.md)
- [PresignedUploadResponseUpload](docs/PresignedUploadResponseUpload.md)
- [RemoveSuppression200Response](docs/RemoveSuppression200Response.md)
- [RemoveSuppressionRequest](docs/RemoveSuppressionRequest.md)
- [ResultsResponse](docs/ResultsResponse.md)
- [SuppressionCheckResponse](docs/SuppressionCheckResponse.md)
- [SuppressionEntry](docs/SuppressionEntry.md)
- [SuppressionListResponse](docs/SuppressionListResponse.md)
- [SuppressionStatsResponse](docs/SuppressionStatsResponse.md)
- [SuppressionStatsResponseByType](docs/SuppressionStatsResponseByType.md)
- [TelemetrySummary](docs/TelemetrySummary.md)
- [TelemetrySummaryRates](docs/TelemetrySummaryRates.md)
- [TelemetrySummaryTopDomainsInner](docs/TelemetrySummaryTopDomainsInner.md)
- [TelemetrySummaryTopReasonsInner](docs/TelemetrySummaryTopReasonsInner.md)
- [TelemetrySummaryTotals](docs/TelemetrySummaryTotals.md)
- [TestPolicyRequest](docs/TestPolicyRequest.md)
- [TestPolicyRequestTestResult](docs/TestPolicyRequestTestResult.md)
- [UpdatePolicyRequest](docs/UpdatePolicyRequest.md)
- [ValidateRequest](docs/ValidateRequest.md)
- [ValidationResponse](docs/ValidationResponse.md)
- [ValidationResponseSuppressionMatch](docs/ValidationResponseSuppressionMatch.md)
- [ValidationResult](docs/ValidationResult.md)

### Authorization


Authentication schemes defined for the API:
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `0.1.0`
- Generator version: `7.19.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://mailodds.com/contact](https://mailodds.com/contact)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[Proprietary](https://mailodds.com/terms)
