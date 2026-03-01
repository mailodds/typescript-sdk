# BulkValidationApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelJob**](BulkValidationApi.md#canceljob) | **POST** /v1/jobs/{job_id}/cancel | Cancel a job |
| [**createJob**](BulkValidationApi.md#createjoboperation) | **POST** /v1/jobs | Create bulk validation job (JSON) |
| [**createJobFromS3**](BulkValidationApi.md#createjobfroms3operation) | **POST** /v1/jobs/upload/s3 | Create job from S3 upload |
| [**createJobUpload**](BulkValidationApi.md#createjobupload) | **POST** /v1/jobs/upload | Create bulk validation job (file upload) |
| [**deleteJob**](BulkValidationApi.md#deletejob) | **DELETE** /v1/jobs/{job_id} | Delete a job |
| [**getJob**](BulkValidationApi.md#getjob) | **GET** /v1/jobs/{job_id} | Get job status |
| [**getJobResults**](BulkValidationApi.md#getjobresults) | **GET** /v1/jobs/{job_id}/results | Get job results |
| [**getPresignedUpload**](BulkValidationApi.md#getpresigneduploadoperation) | **POST** /v1/jobs/upload/presigned | Get S3 presigned upload URL |
| [**listJobs**](BulkValidationApi.md#listjobs) | **GET** /v1/jobs | List validation jobs |



## cancelJob

> JobResponse cancelJob(jobId)

Cancel a job

Cancel a pending or processing job. Partial results are preserved.

### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job cancelled |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createJob

> JobResponse createJob(createJobRequest)

Create bulk validation job (JSON)

Create a new bulk validation job by submitting a JSON array of emails.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { CreateJobOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkValidationApi(config);

  const body = {
    // CreateJobRequest
    createJobRequest: ...,
  } satisfies CreateJobOperationRequest;

  try {
    const data = await api.createJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createJobRequest** | [CreateJobRequest](CreateJobRequest.md) |  | |

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Job created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createJobFromS3

> JobResponse createJobFromS3(createJobFromS3Request)

Create job from S3 upload

Create a validation job from a file previously uploaded to S3.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { CreateJobFromS3OperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkValidationApi(config);

  const body = {
    // CreateJobFromS3Request
    createJobFromS3Request: ...,
  } satisfies CreateJobFromS3OperationRequest;

  try {
    const data = await api.createJobFromS3(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createJobFromS3Request** | [CreateJobFromS3Request](CreateJobFromS3Request.md) |  | |

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Job created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createJobUpload

> JobResponse createJobUpload(file, dedup, metadata)

Create bulk validation job (file upload)

Create a new bulk validation job by uploading a CSV, Excel, or TXT file.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { CreateJobUploadRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkValidationApi(config);

  const body = {
    // Blob | CSV, Excel (.xlsx, .xls), ODS, or TXT file
    file: BINARY_DATA_HERE,
    // boolean | Remove duplicate emails (optional)
    dedup: true,
    // string | JSON metadata for the job (optional)
    metadata: metadata_example,
  } satisfies CreateJobUploadRequest;

  try {
    const data = await api.createJobUpload(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **file** | `Blob` | CSV, Excel (.xlsx, .xls), ODS, or TXT file | [Defaults to `undefined`] |
| **dedup** | `boolean` | Remove duplicate emails | [Optional] [Defaults to `false`] |
| **metadata** | `string` | JSON metadata for the job | [Optional] [Defaults to `undefined`] |

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Job created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteJob

> DeleteJob200Response deleteJob(jobId)

Delete a job

Permanently delete a completed or cancelled job and its results.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { DeleteJobRequest } from '@mailodds/sdk';

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
  } satisfies DeleteJobRequest;

  try {
    const data = await api.deleteJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteJob200Response**](DeleteJob200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job deleted |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJob

> JobResponse getJob(jobId)

Get job status

Get the status and details of a specific validation job.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { GetJobRequest } from '@mailodds/sdk';

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
  } satisfies GetJobRequest;

  try {
    const data = await api.getJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job details |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobResults

> ResultsResponse getJobResults(jobId, format, filter, page, perPage)

Get job results

Download validation results in JSON, CSV, or NDJSON format.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { GetJobResultsRequest } from '@mailodds/sdk';

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
    // 'json' | 'csv' | 'ndjson' (optional)
    format: format_example,
    // 'all' | 'valid_only' | 'invalid_only' (optional)
    filter: filter_example,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies GetJobResultsRequest;

  try {
    const data = await api.getJobResults(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobId** | `string` |  | [Defaults to `undefined`] |
| **format** | `json`, `csv`, `ndjson` |  | [Optional] [Defaults to `&#39;json&#39;`] [Enum: json, csv, ndjson] |
| **filter** | `all`, `valid_only`, `invalid_only` |  | [Optional] [Defaults to `undefined`] [Enum: all, valid_only, invalid_only] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `1000`] |

### Return type

[**ResultsResponse**](ResultsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/csv`, `application/x-ndjson`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Validation results |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPresignedUpload

> PresignedUploadResponse getPresignedUpload(getPresignedUploadRequest)

Get S3 presigned upload URL

Get a presigned URL for uploading large files (&gt;10MB) directly to S3.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { GetPresignedUploadOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkValidationApi(config);

  const body = {
    // GetPresignedUploadRequest
    getPresignedUploadRequest: ...,
  } satisfies GetPresignedUploadOperationRequest;

  try {
    const data = await api.getPresignedUpload(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **getPresignedUploadRequest** | [GetPresignedUploadRequest](GetPresignedUploadRequest.md) |  | |

### Return type

[**PresignedUploadResponse**](PresignedUploadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Presigned upload credentials |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **503** | S3 not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listJobs

> JobListResponse listJobs(cursor, limit, status)

List validation jobs

List all validation jobs for the authenticated account.

### Example

```ts
import {
  Configuration,
  BulkValidationApi,
} from '@mailodds/sdk';
import type { ListJobsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BulkValidationApi(config);

  const body = {
    // string | Pagination cursor (ISO timestamp from previous response) (optional)
    cursor: cursor_example,
    // number | Results per page (optional)
    limit: 56,
    // 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' (optional)
    status: status_example,
  } satisfies ListJobsRequest;

  try {
    const data = await api.listJobs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cursor** | `string` | Pagination cursor (ISO timestamp from previous response) | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Results per page | [Optional] [Defaults to `50`] |
| **status** | `pending`, `processing`, `completed`, `failed`, `cancelled` |  | [Optional] [Defaults to `undefined`] [Enum: pending, processing, completed, failed, cancelled] |

### Return type

[**JobListResponse**](JobListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of jobs |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

