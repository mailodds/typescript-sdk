# BounceAnalysisApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBounceAnalysis**](BounceAnalysisApi.md#createbounceanalysisoperation) | **POST** /v1/bounce-analyses | Analyze bounce logs |
| [**crossReferenceBounces**](BounceAnalysisApi.md#crossreferencebounces) | **GET** /v1/bounce-analyses/{analysis_id}/cross-reference | Cross-reference bounces with validation logs |
| [**deleteBounceAnalysis**](BounceAnalysisApi.md#deletebounceanalysis) | **DELETE** /v1/bounce-analyses/{analysis_id} | Delete bounce analysis |
| [**getBounceAnalysis**](BounceAnalysisApi.md#getbounceanalysis) | **GET** /v1/bounce-analyses/{analysis_id} | Get bounce analysis |
| [**getBounceRecords**](BounceAnalysisApi.md#getbouncerecords) | **GET** /v1/bounce-analyses/{analysis_id}/records | Get bounce records |



## createBounceAnalysis

> BounceAnalysisResponse createBounceAnalysis(createBounceAnalysisRequest)

Analyze bounce logs

Submit bounce log data for analysis. Identifies patterns, categorizes bounce types, and provides remediation recommendations.

### Example

```ts
import {
  Configuration,
  BounceAnalysisApi,
} from '@mailodds/sdk';
import type { CreateBounceAnalysisOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BounceAnalysisApi(config);

  const body = {
    // CreateBounceAnalysisRequest
    createBounceAnalysisRequest: ...,
  } satisfies CreateBounceAnalysisOperationRequest;

  try {
    const data = await api.createBounceAnalysis(body);
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
| **createBounceAnalysisRequest** | [CreateBounceAnalysisRequest](CreateBounceAnalysisRequest.md) |  | |

### Return type

[**BounceAnalysisResponse**](BounceAnalysisResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Bounce analysis created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## crossReferenceBounces

> CrossReferenceBounces200Response crossReferenceBounces(analysisId)

Cross-reference bounces with validation logs

Match bounced emails against your validation history to identify emails that were validated as deliverable but later bounced.

### Example

```ts
import {
  Configuration,
  BounceAnalysisApi,
} from '@mailodds/sdk';
import type { CrossReferenceBouncesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BounceAnalysisApi(config);

  const body = {
    // string | Bounce analysis UUID
    analysisId: analysisId_example,
  } satisfies CrossReferenceBouncesRequest;

  try {
    const data = await api.crossReferenceBounces(body);
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
| **analysisId** | `string` | Bounce analysis UUID | [Defaults to `undefined`] |

### Return type

[**CrossReferenceBounces200Response**](CrossReferenceBounces200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cross-reference results |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBounceAnalysis

> DeletePolicyRule200Response deleteBounceAnalysis(analysisId)

Delete bounce analysis

Delete a bounce analysis and all associated records.

### Example

```ts
import {
  Configuration,
  BounceAnalysisApi,
} from '@mailodds/sdk';
import type { DeleteBounceAnalysisRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BounceAnalysisApi(config);

  const body = {
    // string | Bounce analysis ID
    analysisId: analysisId_example,
  } satisfies DeleteBounceAnalysisRequest;

  try {
    const data = await api.deleteBounceAnalysis(body);
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
| **analysisId** | `string` | Bounce analysis ID | [Defaults to `undefined`] |

### Return type

[**DeletePolicyRule200Response**](DeletePolicyRule200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bounce analysis deleted |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBounceAnalysis

> BounceAnalysisResponse getBounceAnalysis(analysisId)

Get bounce analysis

Get the results of a bounce analysis including category breakdown, top offenders, and recommendations.

### Example

```ts
import {
  Configuration,
  BounceAnalysisApi,
} from '@mailodds/sdk';
import type { GetBounceAnalysisRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BounceAnalysisApi(config);

  const body = {
    // string | Bounce analysis UUID
    analysisId: analysisId_example,
  } satisfies GetBounceAnalysisRequest;

  try {
    const data = await api.getBounceAnalysis(body);
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
| **analysisId** | `string` | Bounce analysis UUID | [Defaults to `undefined`] |

### Return type

[**BounceAnalysisResponse**](BounceAnalysisResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bounce analysis results |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBounceRecords

> GetBounceRecords200Response getBounceRecords(analysisId, page, perPage, type)

Get bounce records

Get individual bounce records from an analysis with pagination.

### Example

```ts
import {
  Configuration,
  BounceAnalysisApi,
} from '@mailodds/sdk';
import type { GetBounceRecordsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BounceAnalysisApi(config);

  const body = {
    // string | Bounce analysis UUID
    analysisId: analysisId_example,
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    perPage: 56,
    // 'hard' | 'soft' | Filter by bounce type (optional)
    type: type_example,
  } satisfies GetBounceRecordsRequest;

  try {
    const data = await api.getBounceRecords(body);
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
| **analysisId** | `string` | Bounce analysis UUID | [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page | [Optional] [Defaults to `50`] |
| **type** | `hard`, `soft` | Filter by bounce type | [Optional] [Defaults to `undefined`] [Enum: hard, soft] |

### Return type

[**GetBounceRecords200Response**](GetBounceRecords200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bounce records |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

