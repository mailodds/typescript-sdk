# CampaignAnalyticsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCampaignABResults**](CampaignAnalyticsApi.md#getcampaignabresults) | **GET** /v1/campaigns/{campaign_id}/ab-results | Get A/B test results |
| [**getCampaignAttribution**](CampaignAnalyticsApi.md#getcampaignattribution) | **GET** /v1/campaigns/{campaign_id}/conversions/attribution | Get campaign attribution |
| [**getCampaignDeliveryConfidence**](CampaignAnalyticsApi.md#getcampaigndeliveryconfidence) | **GET** /v1/campaigns/{campaign_id}/delivery-confidence | Get pre-send delivery confidence |
| [**getCampaignFunnel**](CampaignAnalyticsApi.md#getcampaignfunnel) | **GET** /v1/campaigns/{campaign_id}/funnel | Get campaign funnel |
| [**getCampaignProviderIntelligence**](CampaignAnalyticsApi.md#getcampaignproviderintelligence) | **GET** /v1/campaigns/{campaign_id}/provider-intelligence | Get provider intelligence |



## getCampaignABResults

> GetCampaignABResults200Response getCampaignABResults(campaignId)

Get A/B test results

Get per-variant performance metrics for an A/B test campaign including open rate, click rate, and statistical confidence.

### Example

```ts
import {
  Configuration,
  CampaignAnalyticsApi,
} from '@mailodds/sdk';
import type { GetCampaignABResultsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignAnalyticsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies GetCampaignABResultsRequest;

  try {
    const data = await api.getCampaignABResults(body);
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

[**GetCampaignABResults200Response**](GetCampaignABResults200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A/B test results |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignAttribution

> GetCampaignAttribution200Response getCampaignAttribution(campaignId)

Get campaign attribution

Get first-touch and last-touch attribution comparison for campaign conversions.

### Example

```ts
import {
  Configuration,
  CampaignAnalyticsApi,
} from '@mailodds/sdk';
import type { GetCampaignAttributionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignAnalyticsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies GetCampaignAttributionRequest;

  try {
    const data = await api.getCampaignAttribution(body);
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

[**GetCampaignAttribution200Response**](GetCampaignAttribution200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Attribution data |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignDeliveryConfidence

> GetCampaignDeliveryConfidence200Response getCampaignDeliveryConfidence(campaignId)

Get pre-send delivery confidence

Get a predicted delivery confidence score before sending a campaign. Evaluates list quality, sender reputation, and domain authentication.

### Example

```ts
import {
  Configuration,
  CampaignAnalyticsApi,
} from '@mailodds/sdk';
import type { GetCampaignDeliveryConfidenceRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignAnalyticsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies GetCampaignDeliveryConfidenceRequest;

  try {
    const data = await api.getCampaignDeliveryConfidence(body);
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

[**GetCampaignDeliveryConfidence200Response**](GetCampaignDeliveryConfidence200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Delivery confidence score |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignFunnel

> GetCampaignFunnel200Response getCampaignFunnel(campaignId)

Get campaign funnel

Get the full delivery and engagement funnel for a campaign showing progression from sent through delivered, opened, and clicked.

### Example

```ts
import {
  Configuration,
  CampaignAnalyticsApi,
} from '@mailodds/sdk';
import type { GetCampaignFunnelRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignAnalyticsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies GetCampaignFunnelRequest;

  try {
    const data = await api.getCampaignFunnel(body);
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

[**GetCampaignFunnel200Response**](GetCampaignFunnel200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign funnel analytics |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignProviderIntelligence

> GetCampaignProviderIntelligence200Response getCampaignProviderIntelligence(campaignId)

Get provider intelligence

Get per-provider delivery and engagement breakdown for a campaign (e.g. Gmail, Outlook, Yahoo).

### Example

```ts
import {
  Configuration,
  CampaignAnalyticsApi,
} from '@mailodds/sdk';
import type { GetCampaignProviderIntelligenceRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CampaignAnalyticsApi(config);

  const body = {
    // string | Campaign UUID
    campaignId: campaignId_example,
  } satisfies GetCampaignProviderIntelligenceRequest;

  try {
    const data = await api.getCampaignProviderIntelligence(body);
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

[**GetCampaignProviderIntelligence200Response**](GetCampaignProviderIntelligence200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Provider intelligence data |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

