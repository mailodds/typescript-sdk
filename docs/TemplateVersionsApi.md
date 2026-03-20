# TemplateVersionsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**canaryTemplateVersion**](TemplateVersionsApi.md#canarytemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions/{version_id}/canary | Start canary deployment |
| [**createTemplateVersion**](TemplateVersionsApi.md#createtemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions | Create a template version |
| [**getTemplateVersion**](TemplateVersionsApi.md#gettemplateversion) | **GET** /v1/campaigns/{campaign_id}/template-versions/{version_id} | Get a template version |
| [**listTemplateVersions**](TemplateVersionsApi.md#listtemplateversions) | **GET** /v1/campaigns/{campaign_id}/template-versions | List template versions |
| [**promoteTemplateVersion**](TemplateVersionsApi.md#promotetemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions/{version_id}/promote | Promote a template version |
| [**rollbackTemplateVersion**](TemplateVersionsApi.md#rollbacktemplateversion) | **POST** /v1/campaigns/{campaign_id}/template-versions/rollback | Rollback template version |
| [**updateTemplateVersion**](TemplateVersionsApi.md#updatetemplateversion) | **PUT** /v1/campaigns/{campaign_id}/template-versions/{version_id} | Update a template version |



## canaryTemplateVersion

> canaryTemplateVersion(campaignId, versionId)

Start canary deployment

Start a canary deployment for a template version with a specified traffic percentage.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@mailodds/sdk';
import type { CanaryTemplateVersionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    campaignId: campaignId_example,
    // string
    versionId: versionId_example,
  } satisfies CanaryTemplateVersionRequest;

  try {
    const data = await api.canaryTemplateVersion(body);
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
| **campaignId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Start canary deployment |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTemplateVersion

> createTemplateVersion(campaignId)

Create a template version

Create a new template version for a campaign.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@mailodds/sdk';
import type { CreateTemplateVersionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    campaignId: campaignId_example,
  } satisfies CreateTemplateVersionRequest;

  try {
    const data = await api.createTemplateVersion(body);
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
| **campaignId** | `string` |  | [Defaults to `undefined`] |

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
| **201** | Create a template version |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTemplateVersion

> getTemplateVersion(campaignId, versionId)

Get a template version

Retrieve a specific template version by ID.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@mailodds/sdk';
import type { GetTemplateVersionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    campaignId: campaignId_example,
    // string
    versionId: versionId_example,
  } satisfies GetTemplateVersionRequest;

  try {
    const data = await api.getTemplateVersion(body);
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
| **campaignId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get a template version |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTemplateVersions

> listTemplateVersions(campaignId)

List template versions

List all template versions for a campaign.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@mailodds/sdk';
import type { ListTemplateVersionsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    campaignId: campaignId_example,
  } satisfies ListTemplateVersionsRequest;

  try {
    const data = await api.listTemplateVersions(body);
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
| **campaignId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | List template versions |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## promoteTemplateVersion

> promoteTemplateVersion(campaignId, versionId)

Promote a template version

Promote a template version to active for the campaign.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@mailodds/sdk';
import type { PromoteTemplateVersionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    campaignId: campaignId_example,
    // string
    versionId: versionId_example,
  } satisfies PromoteTemplateVersionRequest;

  try {
    const data = await api.promoteTemplateVersion(body);
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
| **campaignId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Promote a template version |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rollbackTemplateVersion

> rollbackTemplateVersion(campaignId)

Rollback template version

Rollback the canary deployment and revert to the previous active version.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@mailodds/sdk';
import type { RollbackTemplateVersionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    campaignId: campaignId_example,
  } satisfies RollbackTemplateVersionRequest;

  try {
    const data = await api.rollbackTemplateVersion(body);
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
| **campaignId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Rollback template version |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTemplateVersion

> updateTemplateVersion(campaignId, versionId)

Update a template version

Update an existing template version.

### Example

```ts
import {
  Configuration,
  TemplateVersionsApi,
} from '@mailodds/sdk';
import type { UpdateTemplateVersionRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TemplateVersionsApi(config);

  const body = {
    // string
    campaignId: campaignId_example,
    // string
    versionId: versionId_example,
  } satisfies UpdateTemplateVersionRequest;

  try {
    const data = await api.updateTemplateVersion(body);
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
| **campaignId** | `string` |  | [Defaults to `undefined`] |
| **versionId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Update a template version |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

