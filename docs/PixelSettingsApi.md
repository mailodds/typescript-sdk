# PixelSettingsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPixelSettings**](PixelSettingsApi.md#getpixelsettings) | **GET** /v1/pixel-settings | Get pixel settings |
| [**updatePixelSettings**](PixelSettingsApi.md#updatepixelsettingsoperation) | **PATCH** /v1/pixel-settings | Update pixel settings |



## getPixelSettings

> GetPixelSettings200Response getPixelSettings()

Get pixel settings

Get the web pixel tracking configuration.

### Example

```ts
import {
  Configuration,
  PixelSettingsApi,
} from '@mailodds/sdk';
import type { GetPixelSettingsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PixelSettingsApi(config);

  try {
    const data = await api.getPixelSettings();
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

[**GetPixelSettings200Response**](GetPixelSettings200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pixel settings |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePixelSettings

> GetPixelSettings200Response updatePixelSettings(updatePixelSettingsRequest)

Update pixel settings

Update the web pixel subscribe list configuration.

### Example

```ts
import {
  Configuration,
  PixelSettingsApi,
} from '@mailodds/sdk';
import type { UpdatePixelSettingsOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PixelSettingsApi(config);

  const body = {
    // UpdatePixelSettingsRequest
    updatePixelSettingsRequest: ...,
  } satisfies UpdatePixelSettingsOperationRequest;

  try {
    const data = await api.updatePixelSettings(body);
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
| **updatePixelSettingsRequest** | [UpdatePixelSettingsRequest](UpdatePixelSettingsRequest.md) |  | |

### Return type

[**GetPixelSettings200Response**](GetPixelSettings200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pixel settings updated |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

