# ReputationApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getReputation**](ReputationApi.md#getreputation) | **GET** /v1/reputation | Get account reputation |
| [**getReputationTimeline**](ReputationApi.md#getreputationtimeline) | **GET** /v1/reputation/timeline | Get reputation timeline |



## getReputation

> GetReputation200Response getReputation(period)

Get account reputation

Get the aggregate reputation score and breakdown for the account.

### Example

```ts
import {
  Configuration,
  ReputationApi,
} from '@mailodds/sdk';
import type { GetReputationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationApi(config);

  const body = {
    // '24h' | '7d' | '30d' | Evaluation period (optional)
    period: period_example,
  } satisfies GetReputationRequest;

  try {
    const data = await api.getReputation(body);
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
| **period** | `24h`, `7d`, `30d` | Evaluation period | [Optional] [Defaults to `&#39;7d&#39;`] [Enum: 24h, 7d, 30d] |

### Return type

[**GetReputation200Response**](GetReputation200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account reputation |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReputationTimeline

> GetReputationTimeline200Response getReputationTimeline(period)

Get reputation timeline

Get reputation metrics over time.

### Example

```ts
import {
  Configuration,
  ReputationApi,
} from '@mailodds/sdk';
import type { GetReputationTimelineRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationApi(config);

  const body = {
    // '24h' | '7d' | '30d' | Timeline period (optional)
    period: period_example,
  } satisfies GetReputationTimelineRequest;

  try {
    const data = await api.getReputationTimeline(body);
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
| **period** | `24h`, `7d`, `30d` | Timeline period | [Optional] [Defaults to `&#39;30d&#39;`] [Enum: 24h, 7d, 30d] |

### Return type

[**GetReputationTimeline200Response**](GetReputationTimeline200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reputation timeline |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

