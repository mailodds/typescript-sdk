# StorefrontDomainsApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStorefrontDomain**](StorefrontDomainsApi.md#createstorefrontdomainoperation) | **POST** /v1/storefront-domains | Add a custom storefront domain |
| [**deleteStorefrontDomain**](StorefrontDomainsApi.md#deletestorefrontdomain) | **DELETE** /v1/storefront-domains/{domain_id} | Delete a storefront domain |
| [**getStorefrontDomain**](StorefrontDomainsApi.md#getstorefrontdomain) | **GET** /v1/storefront-domains/{domain_id} | Get storefront domain details |
| [**listStorefrontDomains**](StorefrontDomainsApi.md#liststorefrontdomains) | **GET** /v1/storefront-domains | List storefront domains |
| [**verifyStorefrontDomain**](StorefrontDomainsApi.md#verifystorefrontdomain) | **POST** /v1/storefront-domains/{domain_id}/verify | Verify storefront domain DNS |



## createStorefrontDomain

> createStorefrontDomain(createStorefrontDomainRequest)

Add a custom storefront domain

Register a custom domain (e.g., shop.merchant.com) for a storefront store. If a Cloudflare DNS provider is connected, NS records are auto-configured.

### Example

```ts
import {
  Configuration,
  StorefrontDomainsApi,
} from '@mailodds/sdk';
import type { CreateStorefrontDomainOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorefrontDomainsApi(config);

  const body = {
    // CreateStorefrontDomainRequest
    createStorefrontDomainRequest: ...,
  } satisfies CreateStorefrontDomainOperationRequest;

  try {
    const data = await api.createStorefrontDomain(body);
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
| **createStorefrontDomainRequest** | [CreateStorefrontDomainRequest](CreateStorefrontDomainRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Add a custom storefront domain |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStorefrontDomain

> deleteStorefrontDomain(domainId)

Delete a storefront domain

Remove a custom storefront domain. Cleans up DNS records (if auto-configured), TLS certificates, and edge node config.

### Example

```ts
import {
  Configuration,
  StorefrontDomainsApi,
} from '@mailodds/sdk';
import type { DeleteStorefrontDomainRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorefrontDomainsApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies DeleteStorefrontDomainRequest;

  try {
    const data = await api.deleteStorefrontDomain(body);
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
| **200** | Delete a storefront domain |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStorefrontDomain

> getStorefrontDomain(domainId)

Get storefront domain details

Get a custom domain with status, NS record instructions, and certificate info.

### Example

```ts
import {
  Configuration,
  StorefrontDomainsApi,
} from '@mailodds/sdk';
import type { GetStorefrontDomainRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorefrontDomainsApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies GetStorefrontDomainRequest;

  try {
    const data = await api.getStorefrontDomain(body);
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
| **200** | Get storefront domain details |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStorefrontDomains

> listStorefrontDomains()

List storefront domains

List all custom storefront domains for the account.

### Example

```ts
import {
  Configuration,
  StorefrontDomainsApi,
} from '@mailodds/sdk';
import type { ListStorefrontDomainsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorefrontDomainsApi(config);

  try {
    const data = await api.listStorefrontDomains();
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
| **200** | List storefront domains |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyStorefrontDomain

> verifyStorefrontDomain(domainId)

Verify storefront domain DNS

Trigger manual DNS verification for a custom domain. Rate limited to 5 per hour per domain.

### Example

```ts
import {
  Configuration,
  StorefrontDomainsApi,
} from '@mailodds/sdk';
import type { VerifyStorefrontDomainRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorefrontDomainsApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies VerifyStorefrontDomainRequest;

  try {
    const data = await api.verifyStorefrontDomain(body);
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
| **200** | Verify storefront domain DNS |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

