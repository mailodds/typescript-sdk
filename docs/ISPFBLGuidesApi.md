# ISPFBLGuidesApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getIspFblGuide**](ISPFBLGuidesApi.md#getispfblguide) | **GET** /v1/isp-fbl/guides/{isp_id} | Get ISP FBL guide |
| [**listIspFblGuides**](ISPFBLGuidesApi.md#listispfblguides) | **GET** /v1/isp-fbl/guides | List ISP FBL guides |



## getIspFblGuide

> getIspFblGuide(ispId)

Get ISP FBL guide

Retrieve a specific ISP feedback loop setup guide.

### Example

```ts
import {
  Configuration,
  ISPFBLGuidesApi,
} from '@mailodds/sdk';
import type { GetIspFblGuideRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ISPFBLGuidesApi(config);

  const body = {
    // string
    ispId: ispId_example,
  } satisfies GetIspFblGuideRequest;

  try {
    const data = await api.getIspFblGuide(body);
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
| **ispId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get ISP FBL guide |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listIspFblGuides

> listIspFblGuides()

List ISP FBL guides

List all ISP feedback loop setup guides.

### Example

```ts
import {
  Configuration,
  ISPFBLGuidesApi,
} from '@mailodds/sdk';
import type { ListIspFblGuidesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ISPFBLGuidesApi(config);

  try {
    const data = await api.listIspFblGuides();
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
| **200** | List ISP FBL guides |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

