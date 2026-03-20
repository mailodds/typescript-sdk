# WebhookCLIApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhookCliSession**](WebhookCLIApi.md#createwebhookclisessionoperation) | **POST** /v1/webhook-cli/sessions | Create CLI forwarding session |
| [**deleteWebhookCliSession**](WebhookCLIApi.md#deletewebhookclisession) | **DELETE** /v1/webhook-cli/sessions/{session_id} | Close CLI session |
| [**listWebhookDeliveries**](WebhookCLIApi.md#listwebhookdeliveries) | **GET** /v1/webhook-cli/deliveries | List recent webhook deliveries |
| [**replayWebhookDelivery**](WebhookCLIApi.md#replaywebhookdelivery) | **POST** /v1/webhook-cli/deliveries/{delivery_id}/replay | Replay webhook delivery |



## createWebhookCliSession

> CreateWebhookCliSession201Response createWebhookCliSession(createWebhookCliSessionRequest)

Create CLI forwarding session

Register a new session for receiving webhook events via SSE.

### Example

```ts
import {
  Configuration,
  WebhookCLIApi,
} from '@mailodds/sdk';
import type { CreateWebhookCliSessionOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookCLIApi(config);

  const body = {
    // CreateWebhookCliSessionRequest (optional)
    createWebhookCliSessionRequest: ...,
  } satisfies CreateWebhookCliSessionOperationRequest;

  try {
    const data = await api.createWebhookCliSession(body);
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
| **createWebhookCliSessionRequest** | [CreateWebhookCliSessionRequest](CreateWebhookCliSessionRequest.md) |  | [Optional] |

### Return type

[**CreateWebhookCliSession201Response**](CreateWebhookCliSession201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Session created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhookCliSession

> DeleteWebhookCliSession200Response deleteWebhookCliSession(sessionId)

Close CLI session

Close a webhook CLI forwarding session.

### Example

```ts
import {
  Configuration,
  WebhookCLIApi,
} from '@mailodds/sdk';
import type { DeleteWebhookCliSessionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookCLIApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies DeleteWebhookCliSessionRequest;

  try {
    const data = await api.deleteWebhookCliSession(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteWebhookCliSession200Response**](DeleteWebhookCliSession200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session closed |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookDeliveries

> ListWebhookDeliveries200Response listWebhookDeliveries(limit)

List recent webhook deliveries

List recent webhook deliveries for replay.

### Example

```ts
import {
  Configuration,
  WebhookCLIApi,
} from '@mailodds/sdk';
import type { ListWebhookDeliveriesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookCLIApi(config);

  const body = {
    // number | Maximum deliveries to return (optional)
    limit: 56,
  } satisfies ListWebhookDeliveriesRequest;

  try {
    const data = await api.listWebhookDeliveries(body);
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
| **limit** | `number` | Maximum deliveries to return | [Optional] [Defaults to `50`] |

### Return type

[**ListWebhookDeliveries200Response**](ListWebhookDeliveries200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of recent webhook deliveries |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replayWebhookDelivery

> ReplayWebhookDelivery200Response replayWebhookDelivery(deliveryId)

Replay webhook delivery

Replay a historical webhook delivery to active CLI sessions.

### Example

```ts
import {
  Configuration,
  WebhookCLIApi,
} from '@mailodds/sdk';
import type { ReplayWebhookDeliveryRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookCLIApi(config);

  const body = {
    // number
    deliveryId: 56,
  } satisfies ReplayWebhookDeliveryRequest;

  try {
    const data = await api.replayWebhookDelivery(body);
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
| **deliveryId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**ReplayWebhookDelivery200Response**](ReplayWebhookDelivery200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Delivery replayed |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

