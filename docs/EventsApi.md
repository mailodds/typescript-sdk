# EventsApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**trackEvent**](EventsApi.md#trackeventoperation) | **POST** /v1/events/track | Track a commerce event |



## trackEvent

> TrackEventResponse trackEvent(trackEventRequest)

Track a commerce event

Ingest a commerce event (purchase, cart abandonment, browse, wishlist, review, etc.). Supports idempotency via the idempotency_key field (5 minute Redis TTL + DB unique constraint).

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@mailodds/sdk';
import type { TrackEventOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventsApi(config);

  const body = {
    // TrackEventRequest
    trackEventRequest: ...,
  } satisfies TrackEventOperationRequest;

  try {
    const data = await api.trackEvent(body);
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
| **trackEventRequest** | [TrackEventRequest](TrackEventRequest.md) |  | |

### Return type

[**TrackEventResponse**](TrackEventResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Event created |  -  |
| **200** | Idempotent duplicate (event already exists) |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

