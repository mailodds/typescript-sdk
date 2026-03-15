# BlacklistMonitoringApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addBlacklistMonitor**](BlacklistMonitoringApi.md#addblacklistmonitoroperation) | **POST** /v1/blacklist-monitors | Add blacklist monitor |
| [**deleteBlacklistMonitor**](BlacklistMonitoringApi.md#deleteblacklistmonitor) | **DELETE** /v1/blacklist-monitors/{monitor_id} | Delete a blacklist monitor |
| [**getBlacklistHistory**](BlacklistMonitoringApi.md#getblacklisthistory) | **GET** /v1/blacklist-monitors/{monitor_id}/history | Get blacklist check history |
| [**listBlacklistMonitors**](BlacklistMonitoringApi.md#listblacklistmonitors) | **GET** /v1/blacklist-monitors | List blacklist monitors |
| [**runBlacklistCheck**](BlacklistMonitoringApi.md#runblacklistcheck) | **POST** /v1/blacklist-monitors/{monitor_id}/check | Run blacklist check |



## addBlacklistMonitor

> AddBlacklistMonitor201Response addBlacklistMonitor(addBlacklistMonitorRequest)

Add blacklist monitor

Add an IP address or domain to monitor against DNS blacklists. An initial check is run immediately.

### Example

```ts
import {
  Configuration,
  BlacklistMonitoringApi,
} from '@mailodds/sdk';
import type { AddBlacklistMonitorOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BlacklistMonitoringApi(config);

  const body = {
    // AddBlacklistMonitorRequest
    addBlacklistMonitorRequest: ...,
  } satisfies AddBlacklistMonitorOperationRequest;

  try {
    const data = await api.addBlacklistMonitor(body);
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
| **addBlacklistMonitorRequest** | [AddBlacklistMonitorRequest](AddBlacklistMonitorRequest.md) |  | |

### Return type

[**AddBlacklistMonitor201Response**](AddBlacklistMonitor201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Monitor created with initial check result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBlacklistMonitor

> DeletePolicyRule200Response deleteBlacklistMonitor(monitorId)

Delete a blacklist monitor

Permanently remove a blacklist monitor and its check history.

### Example

```ts
import {
  Configuration,
  BlacklistMonitoringApi,
} from '@mailodds/sdk';
import type { DeleteBlacklistMonitorRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BlacklistMonitoringApi(config);

  const body = {
    // string | Monitor UUID
    monitorId: monitorId_example,
  } satisfies DeleteBlacklistMonitorRequest;

  try {
    const data = await api.deleteBlacklistMonitor(body);
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
| **monitorId** | `string` | Monitor UUID | [Defaults to `undefined`] |

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
| **200** | Monitor deleted |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlacklistHistory

> GetBlacklistHistory200Response getBlacklistHistory(monitorId, page, perPage)

Get blacklist check history

Get the listing and delisting timeline for a monitored IP or domain.

### Example

```ts
import {
  Configuration,
  BlacklistMonitoringApi,
} from '@mailodds/sdk';
import type { GetBlacklistHistoryRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BlacklistMonitoringApi(config);

  const body = {
    // string | Monitor UUID
    monitorId: monitorId_example,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies GetBlacklistHistoryRequest;

  try {
    const data = await api.getBlacklistHistory(body);
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
| **monitorId** | `string` | Monitor UUID | [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**GetBlacklistHistory200Response**](GetBlacklistHistory200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Check history |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBlacklistMonitors

> ListBlacklistMonitors200Response listBlacklistMonitors()

List blacklist monitors

List all blacklist monitors for the authenticated account.

### Example

```ts
import {
  Configuration,
  BlacklistMonitoringApi,
} from '@mailodds/sdk';
import type { ListBlacklistMonitorsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BlacklistMonitoringApi(config);

  try {
    const data = await api.listBlacklistMonitors();
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

[**ListBlacklistMonitors200Response**](ListBlacklistMonitors200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of monitors |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## runBlacklistCheck

> RunBlacklistCheck200Response runBlacklistCheck(monitorId)

Run blacklist check

Run an on-demand DNSBL check for a monitored IP or domain.

### Example

```ts
import {
  Configuration,
  BlacklistMonitoringApi,
} from '@mailodds/sdk';
import type { RunBlacklistCheckRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BlacklistMonitoringApi(config);

  const body = {
    // string | Monitor UUID
    monitorId: monitorId_example,
  } satisfies RunBlacklistCheckRequest;

  try {
    const data = await api.runBlacklistCheck(body);
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
| **monitorId** | `string` | Monitor UUID | [Defaults to `undefined`] |

### Return type

[**RunBlacklistCheck200Response**](RunBlacklistCheck200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Check result |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

