# SendingDelegationsApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDelegation**](SendingDelegationsApi.md#createdelegation) | **POST** /v1/sending-domains/{domain_id}/delegations | Create a sending delegation |
| [**listDelegations**](SendingDelegationsApi.md#listdelegations) | **GET** /v1/sending-domains/{domain_id}/delegations | List sending delegations |
| [**revokeDelegation**](SendingDelegationsApi.md#revokedelegation) | **DELETE** /v1/sending-domains/{domain_id}/delegations/{delegation_id} | Revoke a sending delegation |



## createDelegation

> createDelegation(domainId)

Create a sending delegation

Create a sending delegation granting another account permission to send from this domain.

### Example

```ts
import {
  Configuration,
  SendingDelegationsApi,
} from '@mailodds/sdk';
import type { CreateDelegationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendingDelegationsApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies CreateDelegationRequest;

  try {
    const data = await api.createDelegation(body);
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
| **201** | Create a sending delegation |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDelegations

> listDelegations(domainId)

List sending delegations

List all sending delegations for a domain.

### Example

```ts
import {
  Configuration,
  SendingDelegationsApi,
} from '@mailodds/sdk';
import type { ListDelegationsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendingDelegationsApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies ListDelegationsRequest;

  try {
    const data = await api.listDelegations(body);
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
| **200** | List sending delegations |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeDelegation

> revokeDelegation(domainId, delegationId)

Revoke a sending delegation

Revoke a sending delegation, removing the delegate account permission to send.

### Example

```ts
import {
  Configuration,
  SendingDelegationsApi,
} from '@mailodds/sdk';
import type { RevokeDelegationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SendingDelegationsApi(config);

  const body = {
    // string
    domainId: domainId_example,
    // string
    delegationId: delegationId_example,
  } satisfies RevokeDelegationRequest;

  try {
    const data = await api.revokeDelegation(body);
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
| **delegationId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Revoke a sending delegation |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

