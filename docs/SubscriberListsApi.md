# SubscriberListsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**confirmSubscription**](SubscriberListsApi.md#confirmsubscription) | **GET** /v1/confirm/{token} | Confirm subscription |
| [**createList**](SubscriberListsApi.md#createlistoperation) | **POST** /v1/lists | Create a subscriber list |
| [**deleteList**](SubscriberListsApi.md#deletelist) | **DELETE** /v1/lists/{list_id} | Delete a subscriber list |
| [**getList**](SubscriberListsApi.md#getlist) | **GET** /v1/lists/{list_id} | Get a subscriber list |
| [**getLists**](SubscriberListsApi.md#getlists) | **GET** /v1/lists | List subscriber lists |
| [**getSubscribers**](SubscriberListsApi.md#getsubscribers) | **GET** /v1/lists/{list_id}/subscribers | List subscribers |
| [**subscribe**](SubscriberListsApi.md#subscribeoperation) | **POST** /v1/subscribe/{list_id} | Subscribe to a list |
| [**unsubscribeSubscriber**](SubscriberListsApi.md#unsubscribesubscriber) | **DELETE** /v1/lists/{list_id}/subscribers/{subscriber_id} | Unsubscribe a subscriber |



## confirmSubscription

> ConfirmSubscription200Response confirmSubscription(token)

Confirm subscription

Confirm a pending subscription via the token sent in the confirmation email. No authentication required. Redirects to the list\&#39;s configured redirect URL if set, otherwise returns JSON. Tokens expire after 72 hours.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { ConfirmSubscriptionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new SubscriberListsApi();

  const body = {
    // string | Confirmation token from email
    token: token_example,
  } satisfies ConfirmSubscriptionRequest;

  try {
    const data = await api.confirmSubscription(body);
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
| **token** | `string` | Confirmation token from email | [Defaults to `undefined`] |

### Return type

[**ConfirmSubscription200Response**](ConfirmSubscription200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscription confirmed |  -  |
| **302** | Redirect to configured confirmation URL |  -  |
| **400** | Bad request |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createList

> CreateList201Response createList(createListRequest)

Create a subscriber list

Create a new subscriber list. Use lists to organize subscribers and manage double opt-in confirmation flows.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { CreateListOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriberListsApi(config);

  const body = {
    // CreateListRequest
    createListRequest: ...,
  } satisfies CreateListOperationRequest;

  try {
    const data = await api.createList(body);
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
| **createListRequest** | [CreateListRequest](CreateListRequest.md) |  | |

### Return type

[**CreateList201Response**](CreateList201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | List created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteList

> DeletePolicyRule200Response deleteList(listId)

Delete a subscriber list

Soft-delete a subscriber list. Existing subscribers are retained but the list is no longer usable.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { DeleteListRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriberListsApi(config);

  const body = {
    // string | List UUID
    listId: listId_example,
  } satisfies DeleteListRequest;

  try {
    const data = await api.deleteList(body);
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
| **listId** | `string` | List UUID | [Defaults to `undefined`] |

### Return type

[**DeletePolicyRule200Response**](DeletePolicyRule200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List deleted |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getList

> CreateList201Response getList(listId)

Get a subscriber list

Get details of a specific subscriber list including subscriber and confirmed counts.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { GetListRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriberListsApi(config);

  const body = {
    // string | List UUID
    listId: listId_example,
  } satisfies GetListRequest;

  try {
    const data = await api.getList(body);
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
| **listId** | `string` | List UUID | [Defaults to `undefined`] |

### Return type

[**CreateList201Response**](CreateList201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscriber list details |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLists

> GetLists200Response getLists(page, perPage)

List subscriber lists

List all subscriber lists for the authenticated account with pagination.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { GetListsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriberListsApi(config);

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    perPage: 56,
  } satisfies GetListsRequest;

  try {
    const data = await api.getLists(body);
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
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page | [Optional] [Defaults to `25`] |

### Return type

[**GetLists200Response**](GetLists200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of subscriber lists |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubscribers

> GetSubscribers200Response getSubscribers(listId, page, perPage, status)

List subscribers

List paginated subscribers for a specific list. Optionally filter by status.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { GetSubscribersRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriberListsApi(config);

  const body = {
    // string | List UUID
    listId: listId_example,
    // number | Page number (optional)
    page: 56,
    // number | Items per page (optional)
    perPage: 56,
    // 'pending' | 'confirmed' | 'unsubscribed' | 'bounced' | Filter by subscriber status (optional)
    status: status_example,
  } satisfies GetSubscribersRequest;

  try {
    const data = await api.getSubscribers(body);
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
| **listId** | `string` | List UUID | [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **perPage** | `number` | Items per page | [Optional] [Defaults to `50`] |
| **status** | `pending`, `confirmed`, `unsubscribed`, `bounced` | Filter by subscriber status | [Optional] [Defaults to `undefined`] [Enum: pending, confirmed, unsubscribed, bounced] |

### Return type

[**GetSubscribers200Response**](GetSubscribers200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of subscribers |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## subscribe

> UnsubscribeSubscriber200Response subscribe(listId, subscribeRequest)

Subscribe to a list

Add a subscriber to a list and initiate the double opt-in confirmation flow. The subscriber receives a confirmation email and must click the link to confirm. Rate limited to 10 requests/min per IP and 1000/hour per account.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { SubscribeOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriberListsApi(config);

  const body = {
    // string | List UUID
    listId: listId_example,
    // SubscribeRequest
    subscribeRequest: ...,
  } satisfies SubscribeOperationRequest;

  try {
    const data = await api.subscribe(body);
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
| **listId** | `string` | List UUID | [Defaults to `undefined`] |
| **subscribeRequest** | [SubscribeRequest](SubscribeRequest.md) |  | |

### Return type

[**UnsubscribeSubscriber200Response**](UnsubscribeSubscriber200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Subscriber created (pending confirmation) |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **422** | Invalid email address |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unsubscribeSubscriber

> UnsubscribeSubscriber200Response unsubscribeSubscriber(listId, subscriberId)

Unsubscribe a subscriber

Set a subscriber\&#39;s status to unsubscribed. The consent record is retained for compliance.

### Example

```ts
import {
  Configuration,
  SubscriberListsApi,
} from '@mailodds/sdk';
import type { UnsubscribeSubscriberRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriberListsApi(config);

  const body = {
    // string | List UUID
    listId: listId_example,
    // string | Subscriber UUID
    subscriberId: subscriberId_example,
  } satisfies UnsubscribeSubscriberRequest;

  try {
    const data = await api.unsubscribeSubscriber(body);
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
| **listId** | `string` | List UUID | [Defaults to `undefined`] |
| **subscriberId** | `string` | Subscriber UUID | [Defaults to `undefined`] |

### Return type

[**UnsubscribeSubscriber200Response**](UnsubscribeSubscriber200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Subscriber unsubscribed |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

