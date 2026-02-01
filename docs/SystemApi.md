# SystemApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTelemetrySummary**](SystemApi.md#gettelemetrysummary) | **GET** /v1/telemetry/summary | Get validation telemetry |
| [**healthCheck**](SystemApi.md#healthcheck) | **GET** /health | Health check |



## getTelemetrySummary

> TelemetrySummary getTelemetrySummary(window)

Get validation telemetry

Get validation metrics for your account. Useful for building dashboards and monitoring. Supports ETag caching.

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@mailodds/sdk';
import type { GetTelemetrySummaryRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SystemApi(config);

  const body = {
    // '1h' | '24h' | '30d' | Time window for metrics (optional)
    window: window_example,
  } satisfies GetTelemetrySummaryRequest;

  try {
    const data = await api.getTelemetrySummary(body);
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
| **window** | `1h`, `24h`, `30d` | Time window for metrics | [Optional] [Defaults to `&#39;24h&#39;`] [Enum: 1h, 24h, 30d] |

### Return type

[**TelemetrySummary**](TelemetrySummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Telemetry summary |  * ETag - Hash of response for caching <br>  * Cache-Control - Caching directive <br>  |
| **304** | Not Modified - use cached response |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## healthCheck

> HealthCheck200Response healthCheck()

Health check

Check API health status. No authentication required.

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@mailodds/sdk';
import type { HealthCheckRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new SystemApi();

  try {
    const data = await api.healthCheck();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthCheck200Response**](HealthCheck200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API is healthy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

