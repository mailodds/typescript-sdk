# SenderHealthApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSenderHealth**](SenderHealthApi.md#getsenderhealth) | **GET** /v1/sender-health | Get sender health score |
| [**getSenderHealthTrend**](SenderHealthApi.md#getsenderhealthtrend) | **GET** /v1/sender-health/trend | Get sender health trend |



## getSenderHealth

> GetSenderHealth200Response getSenderHealth(period)

Get sender health score

Get an aggregate sender health score (0-100) across all sending domains. Factors in delivery rate, bounce rate, complaint rate, and authentication status.

### Example

```ts
import {
  Configuration,
  SenderHealthApi,
} from '@mailodds/sdk';
import type { GetSenderHealthRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SenderHealthApi(config);

  const body = {
    // '7d' | '30d' | '90d' | Time period for health calculation (optional)
    period: period_example,
  } satisfies GetSenderHealthRequest;

  try {
    const data = await api.getSenderHealth(body);
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
| **period** | `7d`, `30d`, `90d` | Time period for health calculation | [Optional] [Defaults to `&#39;30d&#39;`] [Enum: 7d, 30d, 90d] |

### Return type

[**GetSenderHealth200Response**](GetSenderHealth200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sender health score |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSenderHealthTrend

> GetSenderHealthTrend200Response getSenderHealthTrend(period)

Get sender health trend

Get historical sender health scores over time for trend analysis. Returns daily data points for the requested period.

### Example

```ts
import {
  Configuration,
  SenderHealthApi,
} from '@mailodds/sdk';
import type { GetSenderHealthTrendRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SenderHealthApi(config);

  const body = {
    // '7d' | '30d' | '90d' | Time period for trend data (optional)
    period: period_example,
  } satisfies GetSenderHealthTrendRequest;

  try {
    const data = await api.getSenderHealthTrend(body);
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
| **period** | `7d`, `30d`, `90d` | Time period for trend data | [Optional] [Defaults to `&#39;30d&#39;`] [Enum: 7d, 30d, 90d] |

### Return type

[**GetSenderHealthTrend200Response**](GetSenderHealthTrend200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sender health trend |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

