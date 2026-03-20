# StoreConnectionsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStore**](StoreConnectionsApi.md#createstoreoperation) | **POST** /v1/stores | Create a store connection |
| [**disconnectStore**](StoreConnectionsApi.md#disconnectstore) | **DELETE** /v1/stores/{store_id} | Disconnect a store |
| [**getStore**](StoreConnectionsApi.md#getstore) | **GET** /v1/stores/{store_id} | Get a store connection |
| [**getSyncJobErrors**](StoreConnectionsApi.md#getsyncjoberrors) | **GET** /v1/stores/{store_id}/sync-jobs/{job_id}/errors | Get sync job errors |
| [**listStores**](StoreConnectionsApi.md#liststores) | **GET** /v1/stores | List store connections |
| [**listSyncJobs**](StoreConnectionsApi.md#listsyncjobs) | **GET** /v1/stores/{store_id}/sync-jobs | List sync jobs |
| [**triggerSync**](StoreConnectionsApi.md#triggersync) | **POST** /v1/stores/{store_id}/sync | Trigger product sync |
| [**updateStore**](StoreConnectionsApi.md#updatestoreoperation) | **PUT** /v1/stores/{store_id} | Update a store connection |



## createStore

> CreateStore201Response createStore(createStoreRequest)

Create a store connection

Connect an e-commerce store (WooCommerce, PrestaShop, Shopify, or product feed). After creation, trigger a sync to import products.

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { CreateStoreOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // CreateStoreRequest
    createStoreRequest: ...,
  } satisfies CreateStoreOperationRequest;

  try {
    const data = await api.createStore(body);
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
| **createStoreRequest** | [CreateStoreRequest](CreateStoreRequest.md) |  | |

### Return type

[**CreateStore201Response**](CreateStore201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Store connection created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disconnectStore

> DisconnectStore200Response disconnectStore(storeId)

Disconnect a store

Disconnect a store and deactivate its products. Products are retained but marked inactive.

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { DisconnectStoreRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // string
    storeId: storeId_example,
  } satisfies DisconnectStoreRequest;

  try {
    const data = await api.disconnectStore(body);
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
| **storeId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DisconnectStore200Response**](DisconnectStore200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store disconnected |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStore

> CreateStore201Response getStore(storeId)

Get a store connection

Get details of a specific store connection including sync status and product count.

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { GetStoreRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // string
    storeId: storeId_example,
  } satisfies GetStoreRequest;

  try {
    const data = await api.getStore(body);
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
| **storeId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreateStore201Response**](CreateStore201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store connection details |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSyncJobErrors

> GetSyncJobErrors200Response getSyncJobErrors(storeId, jobId, page, perPage)

Get sync job errors

Get error details for a sync job.

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { GetSyncJobErrorsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // string
    storeId: storeId_example,
    // string
    jobId: jobId_example,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies GetSyncJobErrorsRequest;

  try {
    const data = await api.getSyncJobErrors(body);
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
| **storeId** | `string` |  | [Defaults to `undefined`] |
| **jobId** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**GetSyncJobErrors200Response**](GetSyncJobErrors200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sync job errors |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStores

> ListStores200Response listStores(status)

List store connections

List all store connections for the authenticated account. Optionally filter by status.

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { ListStoresRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // 'active' | 'disconnected' | 'pending' | 'error' | Filter by connection status (optional)
    status: status_example,
  } satisfies ListStoresRequest;

  try {
    const data = await api.listStores(body);
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
| **status** | `active`, `disconnected`, `pending`, `error` | Filter by connection status | [Optional] [Defaults to `undefined`] [Enum: active, disconnected, pending, error] |

### Return type

[**ListStores200Response**](ListStores200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of store connections |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSyncJobs

> ListSyncJobs200Response listSyncJobs(storeId, page, perPage)

List sync jobs

List sync job history for a store.

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { ListSyncJobsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // string
    storeId: storeId_example,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListSyncJobsRequest;

  try {
    const data = await api.listSyncJobs(body);
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
| **storeId** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**ListSyncJobs200Response**](ListSyncJobs200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of sync jobs |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## triggerSync

> SyncResponse triggerSync(storeId, idempotencyKey)

Trigger product sync

Trigger a manual product sync for a store. Supports idempotency via the Idempotency-Key header (5 minute TTL).

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { TriggerSyncRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // string
    storeId: storeId_example,
    // string | Idempotency key to prevent duplicate syncs (5 min TTL) (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies TriggerSyncRequest;

  try {
    const data = await api.triggerSync(body);
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
| **storeId** | `string` |  | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Idempotency key to prevent duplicate syncs (5 min TTL) | [Optional] [Defaults to `undefined`] |

### Return type

[**SyncResponse**](SyncResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sync scheduled |  -  |
| **400** | Bad request |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStore

> CreateStore201Response updateStore(storeId, updateStoreRequest)

Update a store connection

Update store settings such as name, sync interval, or credentials.

### Example

```ts
import {
  Configuration,
  StoreConnectionsApi,
} from '@mailodds/sdk';
import type { UpdateStoreOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StoreConnectionsApi(config);

  const body = {
    // string
    storeId: storeId_example,
    // UpdateStoreRequest
    updateStoreRequest: ...,
  } satisfies UpdateStoreOperationRequest;

  try {
    const data = await api.updateStore(body);
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
| **storeId** | `string` |  | [Defaults to `undefined`] |
| **updateStoreRequest** | [UpdateStoreRequest](UpdateStoreRequest.md) |  | |

### Return type

[**CreateStore201Response**](CreateStore201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store connection updated |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

