# PipelineSimulationApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**simulatePipeline**](PipelineSimulationApi.md#simulatepipeline) | **POST** /v1/simulate | Simulate sending pipeline |



## simulatePipeline

> simulatePipeline()

Simulate sending pipeline

Dry-run the sending or receiving pipeline to preview what would happen without side effects.

### Example

```ts
import {
  Configuration,
  PipelineSimulationApi,
} from '@mailodds/sdk';
import type { SimulatePipelineRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PipelineSimulationApi(config);

  try {
    const data = await api.simulatePipeline();
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
| **200** | Simulate sending pipeline |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

