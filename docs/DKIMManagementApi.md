# DKIMManagementApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDkimDnsRecord**](DKIMManagementApi.md#getdkimdnsrecord) | **GET** /v1/sending-domains/{domain_id}/dkim/dns-record | Get DKIM DNS record |
| [**rotateDkim**](DKIMManagementApi.md#rotatedkim) | **POST** /v1/sending-domains/{domain_id}/dkim/rotate | Rotate DKIM keys |



## getDkimDnsRecord

> getDkimDnsRecord(domainId)

Get DKIM DNS record

Retrieve the current DKIM DNS record and selector for a sending domain.

### Example

```ts
import {
  Configuration,
  DKIMManagementApi,
} from '@mailodds/sdk';
import type { GetDkimDnsRecordRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DKIMManagementApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies GetDkimDnsRecordRequest;

  try {
    const data = await api.getDkimDnsRecord(body);
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
| **200** | Get DKIM DNS record |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateDkim

> rotateDkim(domainId)

Rotate DKIM keys

Generate a new DKIM key pair and rotate the selector for a sending domain.

### Example

```ts
import {
  Configuration,
  DKIMManagementApi,
} from '@mailodds/sdk';
import type { RotateDkimRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DKIMManagementApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies RotateDkimRequest;

  try {
    const data = await api.rotateDkim(body);
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
| **200** | Rotate DKIM keys |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

