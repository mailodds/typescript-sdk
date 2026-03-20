# ServerTestsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getServerTest**](ServerTestsApi.md#getservertest) | **GET** /v1/server-tests/{test_id} | Get server test |
| [**listServerTests**](ServerTestsApi.md#listservertests) | **GET** /v1/server-tests | List server tests |
| [**runServerTest**](ServerTestsApi.md#runservertestoperation) | **POST** /v1/server-tests | Run server test |



## getServerTest

> RunServerTest201Response getServerTest(testId)

Get server test

Get the detailed results of a specific server test.

### Example

```ts
import {
  Configuration,
  ServerTestsApi,
} from '@mailodds/sdk';
import type { GetServerTestRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServerTestsApi(config);

  const body = {
    // string
    testId: testId_example,
  } satisfies GetServerTestRequest;

  try {
    const data = await api.getServerTest(body);
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
| **testId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**RunServerTest201Response**](RunServerTest201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server test details |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listServerTests

> ListServerTests200Response listServerTests(page, perPage)

List server tests

List past server test results with pagination.

### Example

```ts
import {
  Configuration,
  ServerTestsApi,
} from '@mailodds/sdk';
import type { ListServerTestsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServerTestsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListServerTestsRequest;

  try {
    const data = await api.listServerTests(body);
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**ListServerTests200Response**](ListServerTests200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of server tests |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## runServerTest

> RunServerTest201Response runServerTest(runServerTestRequest)

Run server test

Run an SMTP handshake test and MX configuration audit for a domain.

### Example

```ts
import {
  Configuration,
  ServerTestsApi,
} from '@mailodds/sdk';
import type { RunServerTestOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ServerTestsApi(config);

  const body = {
    // RunServerTestRequest
    runServerTestRequest: ...,
  } satisfies RunServerTestOperationRequest;

  try {
    const data = await api.runServerTest(body);
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
| **runServerTestRequest** | [RunServerTestRequest](RunServerTestRequest.md) |  | |

### Return type

[**RunServerTest201Response**](RunServerTest201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Test result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

