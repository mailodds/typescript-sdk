# GlobalSuppressionsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addGlobalSuppressionOverride**](GlobalSuppressionsApi.md#addglobalsuppressionoverride) | **POST** /v1/global-suppressions/overrides | Add global suppression override |
| [**checkGlobalSuppression**](GlobalSuppressionsApi.md#checkglobalsuppression) | **GET** /v1/global-suppressions/check | Check global suppression |
| [**removeGlobalSuppressionOverride**](GlobalSuppressionsApi.md#removeglobalsuppressionoverride) | **DELETE** /v1/global-suppressions/overrides | Remove global suppression override |



## addGlobalSuppressionOverride

> addGlobalSuppressionOverride()

Add global suppression override

Add an override to allow sending to a globally suppressed email address.

### Example

```ts
import {
  Configuration,
  GlobalSuppressionsApi,
} from '@mailodds/sdk';
import type { AddGlobalSuppressionOverrideRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GlobalSuppressionsApi(config);

  try {
    const data = await api.addGlobalSuppressionOverride();
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
| **201** | Add global suppression override |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## checkGlobalSuppression

> checkGlobalSuppression()

Check global suppression

Check if an email address is globally suppressed.

### Example

```ts
import {
  Configuration,
  GlobalSuppressionsApi,
} from '@mailodds/sdk';
import type { CheckGlobalSuppressionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GlobalSuppressionsApi(config);

  try {
    const data = await api.checkGlobalSuppression();
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
| **200** | Check global suppression |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeGlobalSuppressionOverride

> removeGlobalSuppressionOverride()

Remove global suppression override

Remove an override for a globally suppressed email address.

### Example

```ts
import {
  Configuration,
  GlobalSuppressionsApi,
} from '@mailodds/sdk';
import type { RemoveGlobalSuppressionOverrideRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GlobalSuppressionsApi(config);

  try {
    const data = await api.removeGlobalSuppressionOverride();
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
| **200** | Remove global suppression override |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

