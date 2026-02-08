# EmailValidationApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**validateBatch**](EmailValidationApi.md#validatebatchoperation) | **POST** /v1/validate/batch | Validate multiple emails (sync) |
| [**validateEmail**](EmailValidationApi.md#validateemail) | **POST** /v1/validate | Validate single email |



## validateBatch

> ValidateBatch200Response validateBatch(validateBatchRequest)

Validate multiple emails (sync)

Validate up to 100 email addresses synchronously. For larger lists, use the bulk jobs API.

### Example

```ts
import {
  Configuration,
  EmailValidationApi,
} from '@mailodds/sdk';
import type { ValidateBatchOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailValidationApi(config);

  const body = {
    // ValidateBatchRequest
    validateBatchRequest: ...,
  } satisfies ValidateBatchOperationRequest;

  try {
    const data = await api.validateBatch(body);
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
| **validateBatchRequest** | [ValidateBatchRequest](ValidateBatchRequest.md) |  | |

### Return type

[**ValidateBatch200Response**](ValidateBatch200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch validation results |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateEmail

> ValidationResponse validateEmail(validateRequest)

Validate single email

Validate a single email address. Returns detailed validation results including status, sub-status, and recommended action.

### Example

```ts
import {
  Configuration,
  EmailValidationApi,
} from '@mailodds/sdk';
import type { ValidateEmailRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailValidationApi(config);

  const body = {
    // ValidateRequest
    validateRequest: ...,
  } satisfies ValidateEmailRequest;

  try {
    const data = await api.validateEmail(body);
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
| **validateRequest** | [ValidateRequest](ValidateRequest.md) |  | |

### Return type

[**ValidationResponse**](ValidationResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Validation result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

