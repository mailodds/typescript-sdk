# MessageEventsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMessageEvents**](MessageEventsApi.md#getmessageevents) | **GET** /v1/message-events | Get message events |



## getMessageEvents

> GetMessageEvents200Response getMessageEvents(messageId)

Get message events

Get delivery and engagement events for a specific sent message. Returns events in chronological order with bot detection.

### Example

```ts
import {
  Configuration,
  MessageEventsApi,
} from '@mailodds/sdk';
import type { GetMessageEventsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MessageEventsApi(config);

  const body = {
    // string | UUID of the sent message
    messageId: messageId_example,
  } satisfies GetMessageEventsRequest;

  try {
    const data = await api.getMessageEvents(body);
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
| **messageId** | `string` | UUID of the sent message | [Defaults to `undefined`] |

### Return type

[**GetMessageEvents200Response**](GetMessageEvents200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message events with summary |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

