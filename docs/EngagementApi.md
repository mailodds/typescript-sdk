# EngagementApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDisengagedContacts**](EngagementApi.md#getdisengagedcontacts) | **GET** /v1/engagement/disengaged | List disengaged contacts |
| [**getEngagementScore**](EngagementApi.md#getengagementscore) | **GET** /v1/engagement/score/{email} | Get engagement score |
| [**getEngagementSummary**](EngagementApi.md#getengagementsummary) | **GET** /v1/engagement/summary | Get engagement summary |
| [**suppressDisengaged**](EngagementApi.md#suppressdisengagedoperation) | **POST** /v1/engagement/suppress-disengaged | Suppress disengaged contacts |



## getDisengagedContacts

> GetDisengagedContacts200Response getDisengagedContacts(inactiveDays, minSends, domainId, page, perPage)

List disengaged contacts

List contacts that have not engaged within the specified period. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  EngagementApi,
} from '@mailodds/sdk';
import type { GetDisengagedContactsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EngagementApi(config);

  const body = {
    // number | Days of inactivity (optional)
    inactiveDays: 56,
    // number | Minimum emails sent to qualify (optional)
    minSends: 56,
    // string | Filter by sending domain ID (optional)
    domainId: domainId_example,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies GetDisengagedContactsRequest;

  try {
    const data = await api.getDisengagedContacts(body);
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
| **inactiveDays** | `number` | Days of inactivity | [Optional] [Defaults to `90`] |
| **minSends** | `number` | Minimum emails sent to qualify | [Optional] [Defaults to `5`] |
| **domainId** | `string` | Filter by sending domain ID | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**GetDisengagedContacts200Response**](GetDisengagedContacts200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of disengaged contacts |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEngagementScore

> GetEngagementScore200Response getEngagementScore(email)

Get engagement score

Get the engagement score for a specific email address. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  EngagementApi,
} from '@mailodds/sdk';
import type { GetEngagementScoreRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EngagementApi(config);

  const body = {
    // string
    email: email_example,
  } satisfies GetEngagementScoreRequest;

  try {
    const data = await api.getEngagementScore(body);
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
| **email** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetEngagementScore200Response**](GetEngagementScore200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Engagement score |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEngagementSummary

> GetBounceStatsSummary200Response getEngagementSummary(domainId)

Get engagement summary

Get aggregate engagement metrics across all contacts. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  EngagementApi,
} from '@mailodds/sdk';
import type { GetEngagementSummaryRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EngagementApi(config);

  const body = {
    // string | Filter by sending domain ID (optional)
    domainId: domainId_example,
  } satisfies GetEngagementSummaryRequest;

  try {
    const data = await api.getEngagementSummary(body);
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
| **domainId** | `string` | Filter by sending domain ID | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBounceStatsSummary200Response**](GetBounceStatsSummary200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Engagement summary |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## suppressDisengaged

> SuppressDisengaged200Response suppressDisengaged(suppressDisengagedRequest)

Suppress disengaged contacts

Add disengaged contacts to the suppression list. Supports dry_run mode. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  EngagementApi,
} from '@mailodds/sdk';
import type { SuppressDisengagedOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EngagementApi(config);

  const body = {
    // SuppressDisengagedRequest
    suppressDisengagedRequest: ...,
  } satisfies SuppressDisengagedOperationRequest;

  try {
    const data = await api.suppressDisengaged(body);
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
| **suppressDisengagedRequest** | [SuppressDisengagedRequest](SuppressDisengagedRequest.md) |  | |

### Return type

[**SuppressDisengaged200Response**](SuppressDisengaged200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppression result or dry-run preview |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

