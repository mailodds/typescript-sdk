# DomainInsightsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDomainHookEffectiveness**](DomainInsightsApi.md#getdomainhookeffectiveness) | **GET** /v1/sending-domains/{domain_id}/insights/hook-effectiveness | Get hook effectiveness metrics |
| [**getDomainInsightsFunnel**](DomainInsightsApi.md#getdomaininsightsfunnel) | **GET** /v1/sending-domains/{domain_id}/insights/funnel | Get domain engagement funnel |
| [**getDomainInsightsTrends**](DomainInsightsApi.md#getdomaininsightstrends) | **GET** /v1/sending-domains/{domain_id}/insights/trends | Get domain engagement trends |



## getDomainHookEffectiveness

> GetDomainHookEffectiveness200Response getDomainHookEffectiveness(domainId, days)

Get hook effectiveness metrics

Get webhook delivery effectiveness metrics for a sending domain. Requires Pro+ plan.

### Example

```ts
import {
  Configuration,
  DomainInsightsApi,
} from '@mailodds/sdk';
import type { GetDomainHookEffectivenessRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainInsightsApi(config);

  const body = {
    // string | Sending domain ID
    domainId: domainId_example,
    // number | Lookback period in days (optional)
    days: 56,
  } satisfies GetDomainHookEffectivenessRequest;

  try {
    const data = await api.getDomainHookEffectiveness(body);
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
| **domainId** | `string` | Sending domain ID | [Defaults to `undefined`] |
| **days** | `number` | Lookback period in days | [Optional] [Defaults to `30`] |

### Return type

[**GetDomainHookEffectiveness200Response**](GetDomainHookEffectiveness200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Hook effectiveness metrics |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDomainInsightsFunnel

> GetDomainInsightsFunnel200Response getDomainInsightsFunnel(domainId, days)

Get domain engagement funnel

Get engagement funnel for a sending domain (sent &gt; delivered &gt; opened &gt; clicked &gt; converted). Requires Pro+ plan.

### Example

```ts
import {
  Configuration,
  DomainInsightsApi,
} from '@mailodds/sdk';
import type { GetDomainInsightsFunnelRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainInsightsApi(config);

  const body = {
    // string | Sending domain ID
    domainId: domainId_example,
    // number | Lookback period in days (optional)
    days: 56,
  } satisfies GetDomainInsightsFunnelRequest;

  try {
    const data = await api.getDomainInsightsFunnel(body);
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
| **domainId** | `string` | Sending domain ID | [Defaults to `undefined`] |
| **days** | `number` | Lookback period in days | [Optional] [Defaults to `30`] |

### Return type

[**GetDomainInsightsFunnel200Response**](GetDomainInsightsFunnel200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Engagement funnel data |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDomainInsightsTrends

> GetDomainInsightsTrends200Response getDomainInsightsTrends(domainId, days)

Get domain engagement trends

Get daily engagement trend data for a sending domain. Requires Pro+ plan.

### Example

```ts
import {
  Configuration,
  DomainInsightsApi,
} from '@mailodds/sdk';
import type { GetDomainInsightsTrendsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DomainInsightsApi(config);

  const body = {
    // string | Sending domain ID
    domainId: domainId_example,
    // number | Lookback period in days (optional)
    days: 56,
  } satisfies GetDomainInsightsTrendsRequest;

  try {
    const data = await api.getDomainInsightsTrends(body);
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
| **domainId** | `string` | Sending domain ID | [Defaults to `undefined`] |
| **days** | `number` | Lookback period in days | [Optional] [Defaults to `30`] |

### Return type

[**GetDomainInsightsTrends200Response**](GetDomainInsightsTrends200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Engagement trend data |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

