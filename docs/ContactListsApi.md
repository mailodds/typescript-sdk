# ContactListsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addContact**](ContactListsApi.md#addcontactoperation) | **POST** /v1/contact-lists/{list_id}/contacts | Add contact to list |
| [**appendToContactList**](ContactListsApi.md#appendtocontactlistoperation) | **POST** /v1/contact-lists/{list_id}/append | Append to contact list |
| [**createContactList**](ContactListsApi.md#createcontactlistoperation) | **POST** /v1/contact-lists | Create contact list |
| [**deleteContact**](ContactListsApi.md#deletecontact) | **DELETE** /v1/contact-lists/{list_id}/contacts/{contact_id} | Delete contact |
| [**deleteContactList**](ContactListsApi.md#deletecontactlist) | **DELETE** /v1/contact-lists/{list_id} | Delete a contact list |
| [**exportContactList**](ContactListsApi.md#exportcontactlist) | **GET** /v1/contact-lists/{list_id}/export | Export contact list |
| [**getInactiveContactsReport**](ContactListsApi.md#getinactivecontactsreport) | **GET** /v1/contacts/inactive-report | Get inactive contacts report |
| [**importContactList**](ContactListsApi.md#importcontactlist) | **POST** /v1/contact-lists/{list_id}/import | Import contacts from CSV |
| [**listContactLists**](ContactListsApi.md#listcontactlists) | **GET** /v1/contact-lists | List contact lists |
| [**queryContactList**](ContactListsApi.md#querycontactlistoperation) | **POST** /v1/contact-lists/{list_id}/query | Query contact list |
| [**updateContact**](ContactListsApi.md#updatecontactoperation) | **PATCH** /v1/contact-lists/{list_id}/contacts/{contact_id} | Update contact |



## addContact

> AddContact201Response addContact(listId, addContactRequest)

Add contact to list

Add a single contact to a contact list.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { AddContactOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // AddContactRequest
    addContactRequest: ...,
  } satisfies AddContactOperationRequest;

  try {
    const data = await api.addContact(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **addContactRequest** | [AddContactRequest](AddContactRequest.md) |  | |

### Return type

[**AddContact201Response**](AddContact201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Contact added |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appendToContactList

> AppendToContactList200Response appendToContactList(listId, appendToContactListRequest)

Append to contact list

Append validated emails from additional jobs to an existing contact list. Duplicates are automatically skipped.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { AppendToContactListOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // AppendToContactListRequest
    appendToContactListRequest: ...,
  } satisfies AppendToContactListOperationRequest;

  try {
    const data = await api.appendToContactList(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **appendToContactListRequest** | [AppendToContactListRequest](AppendToContactListRequest.md) |  | |

### Return type

[**AppendToContactList200Response**](AppendToContactList200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Append result |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createContactList

> CreateContactList201Response createContactList(createContactListRequest)

Create contact list

Create a new contact list from one or more completed validation jobs. Only accepted (valid) emails are included.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { CreateContactListOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // CreateContactListRequest
    createContactListRequest: ...,
  } satisfies CreateContactListOperationRequest;

  try {
    const data = await api.createContactList(body);
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
| **createContactListRequest** | [CreateContactListRequest](CreateContactListRequest.md) |  | |

### Return type

[**CreateContactList201Response**](CreateContactList201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Contact list created |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteContact

> DeletePolicyRule200Response deleteContact(listId, contactId)

Delete contact

Remove a single contact from a contact list.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { DeleteContactRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // string
    contactId: contactId_example,
  } satisfies DeleteContactRequest;

  try {
    const data = await api.deleteContact(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **contactId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeletePolicyRule200Response**](DeletePolicyRule200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact deleted |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteContactList

> DeletePolicyRule200Response deleteContactList(listId)

Delete a contact list

Permanently delete a contact list and all its entries.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { DeleteContactListRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
  } satisfies DeleteContactListRequest;

  try {
    const data = await api.deleteContactList(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeletePolicyRule200Response**](DeletePolicyRule200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact list deleted |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportContactList

> string exportContactList(listId)

Export contact list

Export a contact list as CSV.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { ExportContactListRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
  } satisfies ExportContactListRequest;

  try {
    const data = await api.exportContactList(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CSV export |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInactiveContactsReport

> GetInactiveContactsReport200Response getInactiveContactsReport(days)

Get inactive contacts report

Get a report of contacts across all lists with no engagement activity (opens, clicks) in the specified period.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { GetInactiveContactsReportRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // number | Inactivity threshold in days (optional)
    days: 56,
  } satisfies GetInactiveContactsReportRequest;

  try {
    const data = await api.getInactiveContactsReport(body);
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
| **days** | `number` | Inactivity threshold in days | [Optional] [Defaults to `90`] |

### Return type

[**GetInactiveContactsReport200Response**](GetInactiveContactsReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inactive contacts report |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importContactList

> ImportContactList200Response importContactList(listId, file, columnMapping, consentSource, tags)

Import contacts from CSV

Import contacts into a list from a CSV file (max 10MB).

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { ImportContactListRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // Blob | CSV file (max 10MB)
    file: BINARY_DATA_HERE,
    // string | JSON mapping of CSV columns to contact fields (optional)
    columnMapping: columnMapping_example,
    // string | Source of consent for imported contacts (optional)
    consentSource: consentSource_example,
    // string | JSON array of tags to apply (optional)
    tags: tags_example,
  } satisfies ImportContactListRequest;

  try {
    const data = await api.importContactList(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **file** | `Blob` | CSV file (max 10MB) | [Defaults to `undefined`] |
| **columnMapping** | `string` | JSON mapping of CSV columns to contact fields | [Optional] [Defaults to `undefined`] |
| **consentSource** | `string` | Source of consent for imported contacts | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | JSON array of tags to apply | [Optional] [Defaults to `undefined`] |

### Return type

[**ImportContactList200Response**](ImportContactList200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Import results |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listContactLists

> ListContactLists200Response listContactLists(page, perPage)

List contact lists

List contact lists for the authenticated account. Contact lists are built from validated email jobs.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { ListContactListsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListContactListsRequest;

  try {
    const data = await api.listContactLists(body);
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

[**ListContactLists200Response**](ListContactLists200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of contact lists |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## queryContactList

> QueryContactList200Response queryContactList(listId, queryContactListRequest)

Query contact list

Query contact list entries with structured filters. Supports filtering by validation status, domain, and other attributes.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { QueryContactListOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // QueryContactListRequest
    queryContactListRequest: ...,
  } satisfies QueryContactListOperationRequest;

  try {
    const data = await api.queryContactList(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **queryContactListRequest** | [QueryContactListRequest](QueryContactListRequest.md) |  | |

### Return type

[**QueryContactList200Response**](QueryContactList200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Query results |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContact

> AddContact201Response updateContact(listId, contactId, updateContactRequest)

Update contact

Update a single contact in a contact list.

### Example

```ts
import {
  Configuration,
  ContactListsApi,
} from '@mailodds/sdk';
import type { UpdateContactOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactListsApi(config);

  const body = {
    // string
    listId: listId_example,
    // string
    contactId: contactId_example,
    // UpdateContactRequest
    updateContactRequest: ...,
  } satisfies UpdateContactOperationRequest;

  try {
    const data = await api.updateContact(body);
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
| **listId** | `string` |  | [Defaults to `undefined`] |
| **contactId** | `string` |  | [Defaults to `undefined`] |
| **updateContactRequest** | [UpdateContactRequest](UpdateContactRequest.md) |  | |

### Return type

[**AddContact201Response**](AddContact201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Contact updated |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

