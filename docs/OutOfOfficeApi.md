# OutOfOfficeApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**batchCheckOoo**](OutOfOfficeApi.md#batchcheckooooperation) | **POST** /v1/out-of-office/batch-check | Batch check OOO status |
| [**deleteOooContact**](OutOfOfficeApi.md#deleteooocontact) | **DELETE** /v1/out-of-office/{email} | Delete OOO contact |
| [**getOooStatus**](OutOfOfficeApi.md#getooostatus) | **GET** /v1/out-of-office/{email}/status | Get OOO status for email |
| [**listOooContacts**](OutOfOfficeApi.md#listooocontacts) | **GET** /v1/out-of-office | List out-of-office contacts |
| [**updateOooContact**](OutOfOfficeApi.md#updateooocontactoperation) | **PATCH** /v1/out-of-office/{email} | Update OOO contact |



## batchCheckOoo

> BatchCheckOoo200Response batchCheckOoo(batchCheckOooRequest)

Batch check OOO status

Check OOO status for up to 1000 email addresses at once. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  OutOfOfficeApi,
} from '@mailodds/sdk';
import type { BatchCheckOooOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OutOfOfficeApi(config);

  const body = {
    // BatchCheckOooRequest
    batchCheckOooRequest: ...,
  } satisfies BatchCheckOooOperationRequest;

  try {
    const data = await api.batchCheckOoo(body);
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
| **batchCheckOooRequest** | [BatchCheckOooRequest](BatchCheckOooRequest.md) |  | |

### Return type

[**BatchCheckOoo200Response**](BatchCheckOoo200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch OOO check results |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteOooContact

> DeleteOooContact200Response deleteOooContact(email)

Delete OOO contact

Clear out-of-office status for an email address. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  OutOfOfficeApi,
} from '@mailodds/sdk';
import type { DeleteOooContactRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OutOfOfficeApi(config);

  const body = {
    // string | Email address
    email: email_example,
  } satisfies DeleteOooContactRequest;

  try {
    const data = await api.deleteOooContact(body);
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
| **email** | `string` | Email address | [Defaults to `undefined`] |

### Return type

[**DeleteOooContact200Response**](DeleteOooContact200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OOO status cleared |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOooStatus

> GetOooStatus200Response getOooStatus(email)

Get OOO status for email

Check if a specific email address is currently out-of-office. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  OutOfOfficeApi,
} from '@mailodds/sdk';
import type { GetOooStatusRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OutOfOfficeApi(config);

  const body = {
    // string | Email address to check
    email: email_example,
  } satisfies GetOooStatusRequest;

  try {
    const data = await api.getOooStatus(body);
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
| **email** | `string` | Email address to check | [Defaults to `undefined`] |

### Return type

[**GetOooStatus200Response**](GetOooStatus200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OOO status |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOooContacts

> ListOooContacts200Response listOooContacts(activeOnly, page, perPage)

List out-of-office contacts

List contacts detected as out-of-office. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  OutOfOfficeApi,
} from '@mailodds/sdk';
import type { ListOooContactsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OutOfOfficeApi(config);

  const body = {
    // boolean | Only return currently active OOO contacts (optional)
    activeOnly: true,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListOooContactsRequest;

  try {
    const data = await api.listOooContacts(body);
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
| **activeOnly** | `boolean` | Only return currently active OOO contacts | [Optional] [Defaults to `true`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `100`] |

### Return type

[**ListOooContacts200Response**](ListOooContacts200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of OOO contacts |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateOooContact

> object updateOooContact(email, updateOooContactRequest)

Update OOO contact

Manually set or clear out-of-office status for an email. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  OutOfOfficeApi,
} from '@mailodds/sdk';
import type { UpdateOooContactOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OutOfOfficeApi(config);

  const body = {
    // string | Email address
    email: email_example,
    // UpdateOooContactRequest
    updateOooContactRequest: ...,
  } satisfies UpdateOooContactOperationRequest;

  try {
    const data = await api.updateOooContact(body);
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
| **email** | `string` | Email address | [Defaults to `undefined`] |
| **updateOooContactRequest** | [UpdateOooContactRequest](UpdateOooContactRequest.md) |  | |

### Return type

**object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OOO contact updated |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

