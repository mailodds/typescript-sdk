# AlertRulesApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAlertRule**](AlertRulesApi.md#createalertruleoperation) | **POST** /v1/alert-rules | Create alert rule |
| [**deleteAlertRule**](AlertRulesApi.md#deletealertrule) | **DELETE** /v1/alert-rules/{rule_id} | Delete alert rule |
| [**getAlertRule**](AlertRulesApi.md#getalertrule) | **GET** /v1/alert-rules/{rule_id} | Get alert rule |
| [**listAlertRules**](AlertRulesApi.md#listalertrules) | **GET** /v1/alert-rules | List alert rules |
| [**updateAlertRule**](AlertRulesApi.md#updatealertruleoperation) | **PUT** /v1/alert-rules/{rule_id} | Update alert rule |



## createAlertRule

> CreateAlertRule201Response createAlertRule(createAlertRuleRequest)

Create alert rule

Create a new metric threshold alert rule. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  AlertRulesApi,
} from '@mailodds/sdk';
import type { CreateAlertRuleOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AlertRulesApi(config);

  const body = {
    // CreateAlertRuleRequest
    createAlertRuleRequest: ...,
  } satisfies CreateAlertRuleOperationRequest;

  try {
    const data = await api.createAlertRule(body);
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
| **createAlertRuleRequest** | [CreateAlertRuleRequest](CreateAlertRuleRequest.md) |  | |

### Return type

[**CreateAlertRule201Response**](CreateAlertRule201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Alert rule created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAlertRule

> DeletePolicyRule200Response deleteAlertRule(ruleId)

Delete alert rule

Delete an alert rule. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  AlertRulesApi,
} from '@mailodds/sdk';
import type { DeleteAlertRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AlertRulesApi(config);

  const body = {
    // string | Alert rule ID
    ruleId: ruleId_example,
  } satisfies DeleteAlertRuleRequest;

  try {
    const data = await api.deleteAlertRule(body);
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
| **ruleId** | `string` | Alert rule ID | [Defaults to `undefined`] |

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
| **200** | Alert rule deleted |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAlertRule

> CreateAlertRule201Response getAlertRule(ruleId)

Get alert rule

Get a single alert rule by ID. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  AlertRulesApi,
} from '@mailodds/sdk';
import type { GetAlertRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AlertRulesApi(config);

  const body = {
    // string | Alert rule ID
    ruleId: ruleId_example,
  } satisfies GetAlertRuleRequest;

  try {
    const data = await api.getAlertRule(body);
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
| **ruleId** | `string` | Alert rule ID | [Defaults to `undefined`] |

### Return type

[**CreateAlertRule201Response**](CreateAlertRule201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert rule details |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAlertRules

> ListAlertRules200Response listAlertRules()

List alert rules

List all configured alert rules. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  AlertRulesApi,
} from '@mailodds/sdk';
import type { ListAlertRulesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AlertRulesApi(config);

  try {
    const data = await api.listAlertRules();
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

[**ListAlertRules200Response**](ListAlertRules200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of alert rules |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAlertRule

> CreateAlertRule201Response updateAlertRule(ruleId, updateAlertRuleRequest)

Update alert rule

Update an existing alert rule. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  AlertRulesApi,
} from '@mailodds/sdk';
import type { UpdateAlertRuleOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AlertRulesApi(config);

  const body = {
    // string | Alert rule ID
    ruleId: ruleId_example,
    // UpdateAlertRuleRequest
    updateAlertRuleRequest: ...,
  } satisfies UpdateAlertRuleOperationRequest;

  try {
    const data = await api.updateAlertRule(body);
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
| **ruleId** | `string` | Alert rule ID | [Defaults to `undefined`] |
| **updateAlertRuleRequest** | [UpdateAlertRuleRequest](UpdateAlertRuleRequest.md) |  | |

### Return type

[**CreateAlertRule201Response**](CreateAlertRule201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert rule updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

