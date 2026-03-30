# DeliverabilityAdvisorApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**dismissDeliverabilityRecommendation**](DeliverabilityAdvisorApi.md#dismissdeliverabilityrecommendation) | **POST** /v1/deliverability/recommendations/{recommendation_id}/dismiss | Dismiss a deliverability recommendation |
| [**getDeliverabilityRecommendations**](DeliverabilityAdvisorApi.md#getdeliverabilityrecommendations) | **GET** /v1/deliverability/recommendations | Get deliverability recommendations |



## dismissDeliverabilityRecommendation

> dismissDeliverabilityRecommendation(recommendationId)

Dismiss a deliverability recommendation

Dismiss a deliverability recommendation so it no longer appears.

### Example

```ts
import {
  Configuration,
  DeliverabilityAdvisorApi,
} from '@mailodds/sdk';
import type { DismissDeliverabilityRecommendationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DeliverabilityAdvisorApi(config);

  const body = {
    // string
    recommendationId: recommendationId_example,
  } satisfies DismissDeliverabilityRecommendationRequest;

  try {
    const data = await api.dismissDeliverabilityRecommendation(body);
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
| **recommendationId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dismiss a deliverability recommendation |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeliverabilityRecommendations

> getDeliverabilityRecommendations()

Get deliverability recommendations

Retrieve actionable deliverability recommendations for the account.

### Example

```ts
import {
  Configuration,
  DeliverabilityAdvisorApi,
} from '@mailodds/sdk';
import type { GetDeliverabilityRecommendationsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DeliverabilityAdvisorApi(config);

  try {
    const data = await api.getDeliverabilityRecommendations();
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

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Get deliverability recommendations |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

