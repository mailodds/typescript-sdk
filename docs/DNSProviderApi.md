# DNSProviderApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**connectDnsProvider**](DNSProviderApi.md#connectdnsprovideroperation) | **POST** /v1/account/dns-provider | Connect DNS provider |
| [**disconnectDnsProvider**](DNSProviderApi.md#disconnectdnsprovider) | **DELETE** /v1/account/dns-provider | Disconnect DNS provider |
| [**getDnsProvider**](DNSProviderApi.md#getdnsprovider) | **GET** /v1/account/dns-provider | Get DNS provider status |



## connectDnsProvider

> connectDnsProvider(connectDnsProviderRequest)

Connect DNS provider

Store a Cloudflare API token on the account for automated DNS configuration. Token is validated, zones are discovered, and write permission is tested before storage.

### Example

```ts
import {
  Configuration,
  DNSProviderApi,
} from '@mailodds/sdk';
import type { ConnectDnsProviderOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSProviderApi(config);

  const body = {
    // ConnectDnsProviderRequest
    connectDnsProviderRequest: ...,
  } satisfies ConnectDnsProviderOperationRequest;

  try {
    const data = await api.connectDnsProvider(body);
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
| **connectDnsProviderRequest** | [ConnectDnsProviderRequest](ConnectDnsProviderRequest.md) |  | |

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
| **200** | Connect DNS provider |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disconnectDnsProvider

> disconnectDnsProvider()

Disconnect DNS provider

Remove the stored DNS provider token and clear zone cache.

### Example

```ts
import {
  Configuration,
  DNSProviderApi,
} from '@mailodds/sdk';
import type { DisconnectDnsProviderRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSProviderApi(config);

  try {
    const data = await api.disconnectDnsProvider();
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
| **200** | Disconnect DNS provider |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDnsProvider

> getDnsProvider()

Get DNS provider status

Get the DNS provider connection status. Token is never exposed in the response.

### Example

```ts
import {
  Configuration,
  DNSProviderApi,
} from '@mailodds/sdk';
import type { GetDnsProviderRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DNSProviderApi(config);

  try {
    const data = await api.getDnsProvider();
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
| **200** | Get DNS provider status |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

