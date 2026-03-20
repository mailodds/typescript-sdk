# ManagedSPFApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createManagedSpf**](ManagedSPFApi.md#createmanagedspf) | **POST** /v1/sending-domains/{domain_id}/managed-spf | Create managed SPF record |
| [**getManagedSpf**](ManagedSPFApi.md#getmanagedspf) | **GET** /v1/sending-domains/{domain_id}/managed-spf | Get managed SPF record |
| [**refreshManagedSpf**](ManagedSPFApi.md#refreshmanagedspf) | **POST** /v1/sending-domains/{domain_id}/managed-spf/refresh | Refresh managed SPF record |
| [**updateManagedSpf**](ManagedSPFApi.md#updatemanagedspf) | **PUT** /v1/sending-domains/{domain_id}/managed-spf | Update managed SPF settings |



## createManagedSpf

> createManagedSpf(domainId)

Create managed SPF record

Create a managed SPF record for a sending domain.

### Example

```ts
import {
  Configuration,
  ManagedSPFApi,
} from '@mailodds/sdk';
import type { CreateManagedSpfRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedSPFApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies CreateManagedSpfRequest;

  try {
    const data = await api.createManagedSpf(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |

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
| **201** | Create managed SPF record |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getManagedSpf

> getManagedSpf(domainId)

Get managed SPF record

Retrieve the managed SPF record for a sending domain.

### Example

```ts
import {
  Configuration,
  ManagedSPFApi,
} from '@mailodds/sdk';
import type { GetManagedSpfRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedSPFApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies GetManagedSpfRequest;

  try {
    const data = await api.getManagedSpf(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get managed SPF record |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshManagedSpf

> refreshManagedSpf(domainId)

Refresh managed SPF record

Re-resolve DNS and refresh the managed SPF record for a sending domain.

### Example

```ts
import {
  Configuration,
  ManagedSPFApi,
} from '@mailodds/sdk';
import type { RefreshManagedSpfRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedSPFApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies RefreshManagedSpfRequest;

  try {
    const data = await api.refreshManagedSpf(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Refresh managed SPF record |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateManagedSpf

> updateManagedSpf(domainId)

Update managed SPF settings

Update managed SPF settings such as enabling or disabling for a sending domain.

### Example

```ts
import {
  Configuration,
  ManagedSPFApi,
} from '@mailodds/sdk';
import type { UpdateManagedSpfRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManagedSPFApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies UpdateManagedSpfRequest;

  try {
    const data = await api.updateManagedSpf(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Update managed SPF settings |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

