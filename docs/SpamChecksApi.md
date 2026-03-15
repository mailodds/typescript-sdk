# SpamChecksApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSpamCheck**](SpamChecksApi.md#getspamcheck) | **GET** /v1/spam-checks/{check_id} | Get spam check |
| [**listSpamChecks**](SpamChecksApi.md#listspamchecks) | **GET** /v1/spam-checks | List spam checks |
| [**runSpamCheck**](SpamChecksApi.md#runspamcheckoperation) | **POST** /v1/spam-checks | Run spam check |



## getSpamCheck

> RunSpamCheck201Response getSpamCheck(checkId)

Get spam check

Get the detailed result of a specific spam check.

### Example

```ts
import {
  Configuration,
  SpamChecksApi,
} from '@mailodds/sdk';
import type { GetSpamCheckRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SpamChecksApi(config);

  const body = {
    // string | Spam check UUID
    checkId: checkId_example,
  } satisfies GetSpamCheckRequest;

  try {
    const data = await api.getSpamCheck(body);
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
| **checkId** | `string` | Spam check UUID | [Defaults to `undefined`] |

### Return type

[**RunSpamCheck201Response**](RunSpamCheck201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Spam check details |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSpamChecks

> ListSpamChecks200Response listSpamChecks(page, perPage)

List spam checks

List past spam check results with pagination.

### Example

```ts
import {
  Configuration,
  SpamChecksApi,
} from '@mailodds/sdk';
import type { ListSpamChecksRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SpamChecksApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListSpamChecksRequest;

  try {
    const data = await api.listSpamChecks(body);
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

[**ListSpamChecks200Response**](ListSpamChecks200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of spam checks |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## runSpamCheck

> RunSpamCheck201Response runSpamCheck(runSpamCheckRequest)

Run spam check

Run backend spam checks on email sending parameters. Checks domain reputation, link safety, and subject line quality.

### Example

```ts
import {
  Configuration,
  SpamChecksApi,
} from '@mailodds/sdk';
import type { RunSpamCheckOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SpamChecksApi(config);

  const body = {
    // RunSpamCheckRequest
    runSpamCheckRequest: ...,
  } satisfies RunSpamCheckOperationRequest;

  try {
    const data = await api.runSpamCheck(body);
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
| **runSpamCheckRequest** | [RunSpamCheckRequest](RunSpamCheckRequest.md) |  | |

### Return type

[**RunSpamCheck201Response**](RunSpamCheck201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Spam check result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

