# EventDestinationsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEventDestination**](EventDestinationsApi.md#createeventdestination) | **POST** /v1/event-destinations | Create an event destination |
| [**deleteEventDestination**](EventDestinationsApi.md#deleteeventdestination) | **DELETE** /v1/event-destinations/{destination_id} | Delete an event destination |
| [**getEventDestination**](EventDestinationsApi.md#geteventdestination) | **GET** /v1/event-destinations/{destination_id} | Get an event destination |
| [**listEventDestinationTemplates**](EventDestinationsApi.md#listeventdestinationtemplates) | **GET** /v1/event-destinations/templates | List event destination templates |
| [**listEventDestinations**](EventDestinationsApi.md#listeventdestinations) | **GET** /v1/event-destinations | List event destinations |
| [**listEventSchemas**](EventDestinationsApi.md#listeventschemas) | **GET** /v1/event-destinations/schemas | List event schemas |
| [**updateEventDestination**](EventDestinationsApi.md#updateeventdestination) | **PUT** /v1/event-destinations/{destination_id} | Update an event destination |



## createEventDestination

> createEventDestination()

Create an event destination

Create a new event destination for receiving webhook callbacks.

### Example

```ts
import {
  Configuration,
  EventDestinationsApi,
} from '@mailodds/sdk';
import type { CreateEventDestinationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventDestinationsApi(config);

  try {
    const data = await api.createEventDestination();
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
| **201** | Create an event destination |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEventDestination

> deleteEventDestination(destinationId)

Delete an event destination

Delete an event destination.

### Example

```ts
import {
  Configuration,
  EventDestinationsApi,
} from '@mailodds/sdk';
import type { DeleteEventDestinationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventDestinationsApi(config);

  const body = {
    // number
    destinationId: 56,
  } satisfies DeleteEventDestinationRequest;

  try {
    const data = await api.deleteEventDestination(body);
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
| **destinationId** | `number` |  | [Defaults to `undefined`] |

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
| **200** | Delete an event destination |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEventDestination

> getEventDestination(destinationId)

Get an event destination

Retrieve a single event destination by ID.

### Example

```ts
import {
  Configuration,
  EventDestinationsApi,
} from '@mailodds/sdk';
import type { GetEventDestinationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventDestinationsApi(config);

  const body = {
    // number
    destinationId: 56,
  } satisfies GetEventDestinationRequest;

  try {
    const data = await api.getEventDestination(body);
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
| **destinationId** | `number` |  | [Defaults to `undefined`] |

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
| **200** | Get an event destination |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listEventDestinationTemplates

> listEventDestinationTemplates()

List event destination templates

List pre-built payload templates for event destinations.

### Example

```ts
import {
  Configuration,
  EventDestinationsApi,
} from '@mailodds/sdk';
import type { ListEventDestinationTemplatesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventDestinationsApi(config);

  try {
    const data = await api.listEventDestinationTemplates();
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
| **200** | List event destination templates |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listEventDestinations

> listEventDestinations()

List event destinations

List all event destinations for the account.

### Example

```ts
import {
  Configuration,
  EventDestinationsApi,
} from '@mailodds/sdk';
import type { ListEventDestinationsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventDestinationsApi(config);

  try {
    const data = await api.listEventDestinations();
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
| **200** | List event destinations |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listEventSchemas

> listEventSchemas()

List event schemas

List JSON schemas for each event type.

### Example

```ts
import {
  Configuration,
  EventDestinationsApi,
} from '@mailodds/sdk';
import type { ListEventSchemasRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventDestinationsApi(config);

  try {
    const data = await api.listEventSchemas();
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
| **200** | List event schemas |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateEventDestination

> updateEventDestination(destinationId)

Update an event destination

Update an existing event destination.

### Example

```ts
import {
  Configuration,
  EventDestinationsApi,
} from '@mailodds/sdk';
import type { UpdateEventDestinationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EventDestinationsApi(config);

  const body = {
    // number
    destinationId: 56,
  } satisfies UpdateEventDestinationRequest;

  try {
    const data = await api.updateEventDestination(body);
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
| **destinationId** | `number` |  | [Defaults to `undefined`] |

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
| **200** | Update an event destination |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

