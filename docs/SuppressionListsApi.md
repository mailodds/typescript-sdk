# SuppressionListsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addSuppression**](SuppressionListsApi.md#addsuppressionoperation) | **POST** /v1/suppression | Add suppression entries |
| [**checkSuppression**](SuppressionListsApi.md#checksuppressionoperation) | **POST** /v1/suppression/check | Check suppression status |
| [**getSuppressionAuditLog**](SuppressionListsApi.md#getsuppressionauditlog) | **GET** /v1/suppression/audit | Get suppression audit log |
| [**getSuppressionStats**](SuppressionListsApi.md#getsuppressionstats) | **GET** /v1/suppression/stats | Get suppression statistics |
| [**listSuppression**](SuppressionListsApi.md#listsuppression) | **GET** /v1/suppression | List suppression entries |
| [**removeSuppression**](SuppressionListsApi.md#removesuppressionoperation) | **DELETE** /v1/suppression | Remove suppression entries |



## addSuppression

> AddSuppressionResponse addSuppression(addSuppressionRequest)

Add suppression entries

Add emails or domains to the suppression list.

### Example

```ts
import {
  Configuration,
  SuppressionListsApi,
} from '@mailodds/sdk';
import type { AddSuppressionOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionListsApi(config);

  const body = {
    // AddSuppressionRequest
    addSuppressionRequest: ...,
  } satisfies AddSuppressionOperationRequest;

  try {
    const data = await api.addSuppression(body);
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
| **addSuppressionRequest** | [AddSuppressionRequest](AddSuppressionRequest.md) |  | |

### Return type

[**AddSuppressionResponse**](AddSuppressionResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Entries added |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## checkSuppression

> SuppressionCheckResponse checkSuppression(checkSuppressionRequest)

Check suppression status

Check if an email is suppressed.

### Example

```ts
import {
  Configuration,
  SuppressionListsApi,
} from '@mailodds/sdk';
import type { CheckSuppressionOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionListsApi(config);

  const body = {
    // CheckSuppressionRequest
    checkSuppressionRequest: ...,
  } satisfies CheckSuppressionOperationRequest;

  try {
    const data = await api.checkSuppression(body);
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
| **checkSuppressionRequest** | [CheckSuppressionRequest](CheckSuppressionRequest.md) |  | |

### Return type

[**SuppressionCheckResponse**](SuppressionCheckResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppression check result |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSuppressionAuditLog

> SuppressionAuditResponse getSuppressionAuditLog(page, limit)

Get suppression audit log

Get a chronological log of suppression list changes (additions, removals).

### Example

```ts
import {
  Configuration,
  SuppressionListsApi,
} from '@mailodds/sdk';
import type { GetSuppressionAuditLogRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionListsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies GetSuppressionAuditLogRequest;

  try {
    const data = await api.getSuppressionAuditLog(body);
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**SuppressionAuditResponse**](SuppressionAuditResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audit log entries |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSuppressionStats

> SuppressionStatsResponse getSuppressionStats()

Get suppression statistics

Get statistics about the suppression list.

### Example

```ts
import {
  Configuration,
  SuppressionListsApi,
} from '@mailodds/sdk';
import type { GetSuppressionStatsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionListsApi(config);

  try {
    const data = await api.getSuppressionStats();
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

[**SuppressionStatsResponse**](SuppressionStatsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppression statistics |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSuppression

> SuppressionListResponse listSuppression(page, perPage, type, search, source)

List suppression entries

List all suppression entries for the account.

### Example

```ts
import {
  Configuration,
  SuppressionListsApi,
} from '@mailodds/sdk';
import type { ListSuppressionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionListsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
    // 'email' | 'domain' (optional)
    type: type_example,
    // string (optional)
    search: search_example,
    // string | Filter by entry source (e.g. api, bounce, complaint) (optional)
    source: source_example,
  } satisfies ListSuppressionRequest;

  try {
    const data = await api.listSuppression(body);
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `50`] |
| **type** | `email`, `domain` |  | [Optional] [Defaults to `undefined`] [Enum: email, domain] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **source** | `string` | Filter by entry source (e.g. api, bounce, complaint) | [Optional] [Defaults to `undefined`] |

### Return type

[**SuppressionListResponse**](SuppressionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Suppression list |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeSuppression

> RemoveSuppression200Response removeSuppression(removeSuppressionRequest)

Remove suppression entries

Remove emails or domains from the suppression list.

### Example

```ts
import {
  Configuration,
  SuppressionListsApi,
} from '@mailodds/sdk';
import type { RemoveSuppressionOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SuppressionListsApi(config);

  const body = {
    // RemoveSuppressionRequest
    removeSuppressionRequest: ...,
  } satisfies RemoveSuppressionOperationRequest;

  try {
    const data = await api.removeSuppression(body);
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
| **removeSuppressionRequest** | [RemoveSuppressionRequest](RemoveSuppressionRequest.md) |  | |

### Return type

[**RemoveSuppression200Response**](RemoveSuppression200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Entries removed |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

