# CampaignsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelCampaign**](CampaignsApi.md#cancelcampaign) | **POST** /v1/campaigns/{campaign_id}/cancel | Cancel a campaign |
| [**createCampaign**](CampaignsApi.md#createcampaignoperation) | **POST** /v1/campaigns | Create a campaign |
| [**createCampaignVariant**](CampaignsApi.md#createcampaignvariant) | **POST** /v1/campaigns/{campaign_id}/variants | Create A/B variant |
| [**getCampaign**](CampaignsApi.md#getcampaign) | **GET** /v1/campaigns/{campaign_id} | Get campaign with stats |
| [**listCampaigns**](CampaignsApi.md#listcampaigns) | **GET** /v1/campaigns | List campaigns |
| [**scheduleCampaign**](CampaignsApi.md#schedulecampaignoperation) | **POST** /v1/campaigns/{campaign_id}/schedule | Schedule a campaign |
| [**sendCampaign**](CampaignsApi.md#sendcampaign) | **POST** /v1/campaigns/{campaign_id}/send | Send a campaign |



## cancelCampaign

> CampaignResponse cancelCampaign(campaignId)

Cancel a campaign

Cancel a scheduled or in-progress campaign. Messages already delivered are not recalled.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailodds/sdk';
import type { CancelCampaignRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies CancelCampaignRequest;

  try {
    const data = await api.cancelCampaign(body);
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
| **campaignId** | `string` | Campaign UUID | [Defaults to `undefined`] |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign cancelled |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCampaign

> CampaignResponse createCampaign(createCampaignRequest)

Create a campaign

Create a new email campaign. Campaigns target a subscriber list and support A/B variant testing.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailodds/sdk';
import type { CreateCampaignOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // CreateCampaignRequest
    createCampaignRequest: ...,
  } satisfies CreateCampaignOperationRequest;

  try {
    const data = await api.createCampaign(body);
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
| **createCampaignRequest** | [CreateCampaignRequest](CreateCampaignRequest.md) |  | |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Campaign created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCampaignVariant

> CreateCampaignVariant201Response createCampaignVariant(campaignId, createVariantRequest)

Create A/B variant

Add an A/B test variant to a campaign. Each variant has its own subject, body, and traffic weight. The campaign must be in draft status.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailodds/sdk';
import type { CreateCampaignVariantRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
    // CreateVariantRequest
    createVariantRequest: ...,
  } satisfies CreateCampaignVariantRequest;

  try {
    const data = await api.createCampaignVariant(body);
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
| **campaignId** | `string` | Campaign UUID | [Defaults to `undefined`] |
| **createVariantRequest** | [CreateVariantRequest](CreateVariantRequest.md) |  | |

### Return type

[**CreateCampaignVariant201Response**](CreateCampaignVariant201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Variant created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaign

> CampaignResponse getCampaign(campaignId)

Get campaign with stats

Get a campaign by ID including delivery statistics and engagement metrics.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailodds/sdk';
import type { GetCampaignRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies GetCampaignRequest;

  try {
    const data = await api.getCampaign(body);
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
| **campaignId** | `string` | Campaign UUID | [Defaults to `undefined`] |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign details with stats |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCampaigns

> ListCampaigns200Response listCampaigns(page, perPage, status)

List campaigns

List all campaigns for the authenticated account with pagination.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailodds/sdk';
import type { ListCampaignsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    perPage: 56,
    // 'draft' | 'scheduled' | 'sending' | 'sent' | 'cancelled' | Filter by campaign status (optional)
    status: status_example,
  } satisfies ListCampaignsRequest;

  try {
    const data = await api.listCampaigns(body);
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
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page | [Optional] [Defaults to `25`] |
| **status** | `draft`, `scheduled`, `sending`, `sent`, `cancelled` | Filter by campaign status | [Optional] [Defaults to `undefined`] [Enum: draft, scheduled, sending, sent, cancelled] |

### Return type

[**ListCampaigns200Response**](ListCampaigns200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of campaigns |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scheduleCampaign

> CampaignResponse scheduleCampaign(campaignId, scheduleCampaignRequest)

Schedule a campaign

Schedule a campaign for future delivery. Provide a send_at timestamp in ISO 8601 format.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailodds/sdk';
import type { ScheduleCampaignOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
    // ScheduleCampaignRequest
    scheduleCampaignRequest: ...,
  } satisfies ScheduleCampaignOperationRequest;

  try {
    const data = await api.scheduleCampaign(body);
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
| **campaignId** | `string` | Campaign UUID | [Defaults to `undefined`] |
| **scheduleCampaignRequest** | [ScheduleCampaignRequest](ScheduleCampaignRequest.md) |  | |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign scheduled |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sendCampaign

> CampaignResponse sendCampaign(campaignId)

Send a campaign

Begin sending a campaign immediately. The campaign must be in draft status with at least one variant and a target list.

### Example

```ts
import {
  Configuration,
  CampaignsApi,
} from '@mailodds/sdk';
import type { SendCampaignRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies SendCampaignRequest;

  try {
    const data = await api.sendCampaign(body);
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
| **campaignId** | `string` | Campaign UUID | [Defaults to `undefined`] |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Campaign accepted for sending |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

