# ContentClassificationApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**classifyContent**](ContentClassificationApi.md#classifycontentoperation) | **POST** /v1/content-check | Classify email content |



## classifyContent

> ClassifyContent200Response classifyContent(classifyContentRequest)

Classify email content

Run LLM-powered content analysis on email content. Detects spam signals, compliance issues, and content quality. Provide either subject+html_body or raw content text.

### Example

```ts
import {
  Configuration,
  ContentClassificationApi,
} from '@mailodds/sdk';
import type { ClassifyContentOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContentClassificationApi(config);

  const body = {
    // ClassifyContentRequest
    classifyContentRequest: ...,
  } satisfies ClassifyContentOperationRequest;

  try {
    const data = await api.classifyContent(body);
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
| **classifyContentRequest** | [ClassifyContentRequest](ClassifyContentRequest.md) |  | |

### Return type

[**ClassifyContent200Response**](ClassifyContent200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Content classification result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

