# ConfigurationSetsApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createConfigurationSet**](ConfigurationSetsApi.md#createconfigurationset) | **POST** /v1/configuration-sets | Create a configuration set |
| [**deleteConfigurationSet**](ConfigurationSetsApi.md#deleteconfigurationset) | **DELETE** /v1/configuration-sets/{name} | Delete a configuration set |
| [**getConfigurationSet**](ConfigurationSetsApi.md#getconfigurationset) | **GET** /v1/configuration-sets/{name} | Get a configuration set |
| [**getConfigurationSetMetrics**](ConfigurationSetsApi.md#getconfigurationsetmetrics) | **GET** /v1/configuration-sets/{name}/metrics | Get configuration set metrics |
| [**listConfigurationSets**](ConfigurationSetsApi.md#listconfigurationsets) | **GET** /v1/configuration-sets | List configuration sets |
| [**updateConfigurationSet**](ConfigurationSetsApi.md#updateconfigurationset) | **PUT** /v1/configuration-sets/{name} | Update a configuration set |



## createConfigurationSet

> createConfigurationSet()

Create a configuration set

Create a new configuration set for grouping sending behavior.

### Example

```ts
import {
  Configuration,
  ConfigurationSetsApi,
} from '@mailodds/sdk';
import type { CreateConfigurationSetRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationSetsApi(config);

  try {
    const data = await api.createConfigurationSet();
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
| **201** | Create a configuration set |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConfigurationSet

> deleteConfigurationSet(name)

Delete a configuration set

Delete a configuration set by name.

### Example

```ts
import {
  Configuration,
  ConfigurationSetsApi,
} from '@mailodds/sdk';
import type { DeleteConfigurationSetRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationSetsApi(config);

  const body = {
    // string
    name: name_example,
  } satisfies DeleteConfigurationSetRequest;

  try {
    const data = await api.deleteConfigurationSet(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Delete a configuration set |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfigurationSet

> getConfigurationSet(name)

Get a configuration set

Retrieve a configuration set by name.

### Example

```ts
import {
  Configuration,
  ConfigurationSetsApi,
} from '@mailodds/sdk';
import type { GetConfigurationSetRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationSetsApi(config);

  const body = {
    // string
    name: name_example,
  } satisfies GetConfigurationSetRequest;

  try {
    const data = await api.getConfigurationSet(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get a configuration set |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfigurationSetMetrics

> getConfigurationSetMetrics(name)

Get configuration set metrics

Retrieve sending metrics for a configuration set.

### Example

```ts
import {
  Configuration,
  ConfigurationSetsApi,
} from '@mailodds/sdk';
import type { GetConfigurationSetMetricsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationSetsApi(config);

  const body = {
    // string
    name: name_example,
  } satisfies GetConfigurationSetMetricsRequest;

  try {
    const data = await api.getConfigurationSetMetrics(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get configuration set metrics |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConfigurationSets

> listConfigurationSets()

List configuration sets

List all configuration sets for the account.

### Example

```ts
import {
  Configuration,
  ConfigurationSetsApi,
} from '@mailodds/sdk';
import type { ListConfigurationSetsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationSetsApi(config);

  try {
    const data = await api.listConfigurationSets();
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
| **200** | List configuration sets |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConfigurationSet

> updateConfigurationSet(name)

Update a configuration set

Update an existing configuration set by name.

### Example

```ts
import {
  Configuration,
  ConfigurationSetsApi,
} from '@mailodds/sdk';
import type { UpdateConfigurationSetRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConfigurationSetsApi(config);

  const body = {
    // string
    name: name_example,
  } satisfies UpdateConfigurationSetRequest;

  try {
    const data = await api.updateConfigurationSet(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Update a configuration set |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

