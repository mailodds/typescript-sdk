# ValidationPoliciesApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addPolicyRule**](ValidationPoliciesApi.md#addpolicyrule) | **POST** /v1/policies/{policy_id}/rules | Add rule to policy |
| [**createPolicy**](ValidationPoliciesApi.md#createpolicyoperation) | **POST** /v1/policies | Create policy |
| [**createPolicyFromPreset**](ValidationPoliciesApi.md#createpolicyfrompresetoperation) | **POST** /v1/policies/from-preset | Create policy from preset |
| [**deletePolicy**](ValidationPoliciesApi.md#deletepolicy) | **DELETE** /v1/policies/{policy_id} | Delete policy |
| [**deletePolicyRule**](ValidationPoliciesApi.md#deletepolicyrule) | **DELETE** /v1/policies/{policy_id}/rules/{rule_id} | Delete rule |
| [**getPolicy**](ValidationPoliciesApi.md#getpolicy) | **GET** /v1/policies/{policy_id} | Get policy |
| [**getPolicyPresets**](ValidationPoliciesApi.md#getpolicypresets) | **GET** /v1/policies/presets | Get policy presets |
| [**listPolicies**](ValidationPoliciesApi.md#listpolicies) | **GET** /v1/policies | List policies |
| [**testPolicy**](ValidationPoliciesApi.md#testpolicyoperation) | **POST** /v1/policies/test | Test policy evaluation |
| [**updatePolicy**](ValidationPoliciesApi.md#updatepolicyoperation) | **PUT** /v1/policies/{policy_id} | Update policy |



## addPolicyRule

> AddPolicyRule201Response addPolicyRule(policyId, policyRule)

Add rule to policy

Add a new rule to an existing policy.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { AddPolicyRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // number
    policyId: 56,
    // PolicyRule
    policyRule: ...,
  } satisfies AddPolicyRuleRequest;

  try {
    const data = await api.addPolicyRule(body);
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
| **policyId** | `number` |  | [Defaults to `undefined`] |
| **policyRule** | [PolicyRule](PolicyRule.md) |  | |

### Return type

[**AddPolicyRule201Response**](AddPolicyRule201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Rule added |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Rule limit exceeded |  -  |
| **404** | Policy not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPolicy

> PolicyResponse createPolicy(createPolicyRequest)

Create policy

Create a new validation policy with rules.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { CreatePolicyOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // CreatePolicyRequest
    createPolicyRequest: ...,
  } satisfies CreatePolicyOperationRequest;

  try {
    const data = await api.createPolicy(body);
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
| **createPolicyRequest** | [CreatePolicyRequest](CreatePolicyRequest.md) |  | |

### Return type

[**PolicyResponse**](PolicyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Policy created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **403** | Plan limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPolicyFromPreset

> PolicyResponse createPolicyFromPreset(createPolicyFromPresetRequest)

Create policy from preset

Create a policy using a preset template.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { CreatePolicyFromPresetOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // CreatePolicyFromPresetRequest
    createPolicyFromPresetRequest: ...,
  } satisfies CreatePolicyFromPresetOperationRequest;

  try {
    const data = await api.createPolicyFromPreset(body);
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
| **createPolicyFromPresetRequest** | [CreatePolicyFromPresetRequest](CreatePolicyFromPresetRequest.md) |  | |

### Return type

[**PolicyResponse**](PolicyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Policy created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePolicy

> DeletePolicy200Response deletePolicy(policyId)

Delete policy

Delete a policy and all its rules.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { DeletePolicyRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // number
    policyId: 56,
  } satisfies DeletePolicyRequest;

  try {
    const data = await api.deletePolicy(body);
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
| **policyId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**DeletePolicy200Response**](DeletePolicy200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Policy deleted |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Policy not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePolicyRule

> DeletePolicyRule200Response deletePolicyRule(policyId, ruleId)

Delete rule

Delete a rule from a policy.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { DeletePolicyRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // number
    policyId: 56,
    // number
    ruleId: 56,
  } satisfies DeletePolicyRuleRequest;

  try {
    const data = await api.deletePolicyRule(body);
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
| **policyId** | `number` |  | [Defaults to `undefined`] |
| **ruleId** | `number` |  | [Defaults to `undefined`] |

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
| **200** | Rule deleted |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Policy or rule not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPolicy

> PolicyResponse getPolicy(policyId)

Get policy

Get a single policy with its rules.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { GetPolicyRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // number
    policyId: 56,
  } satisfies GetPolicyRequest;

  try {
    const data = await api.getPolicy(body);
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
| **policyId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**PolicyResponse**](PolicyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Policy details |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Policy not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPolicyPresets

> PolicyPresetsResponse getPolicyPresets()

Get policy presets

Get available preset templates for quick policy creation.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { GetPolicyPresetsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  try {
    const data = await api.getPolicyPresets();
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

[**PolicyPresetsResponse**](PolicyPresetsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Available presets |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPolicies

> PolicyListResponse listPolicies(includeRules)

List policies

List all validation policies for your account. Includes plan limits.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { ListPoliciesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // boolean | Include full rules in response (optional)
    includeRules: true,
  } satisfies ListPoliciesRequest;

  try {
    const data = await api.listPolicies(body);
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
| **includeRules** | `boolean` | Include full rules in response | [Optional] [Defaults to `false`] |

### Return type

[**PolicyListResponse**](PolicyListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of policies |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testPolicy

> PolicyTestResponse testPolicy(testPolicyRequest)

Test policy evaluation

Test how a policy would evaluate a validation result without affecting production.

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { TestPolicyOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // TestPolicyRequest
    testPolicyRequest: ...,
  } satisfies TestPolicyOperationRequest;

  try {
    const data = await api.testPolicy(body);
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
| **testPolicyRequest** | [TestPolicyRequest](TestPolicyRequest.md) |  | |

### Return type

[**PolicyTestResponse**](PolicyTestResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Test result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Policy not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePolicy

> PolicyResponse updatePolicy(policyId, updatePolicyRequest)

Update policy

Update a policy\&#39;s settings (name, enabled, default).

### Example

```ts
import {
  Configuration,
  ValidationPoliciesApi,
} from '@mailodds/sdk';
import type { UpdatePolicyOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ValidationPoliciesApi(config);

  const body = {
    // number
    policyId: 56,
    // UpdatePolicyRequest
    updatePolicyRequest: ...,
  } satisfies UpdatePolicyOperationRequest;

  try {
    const data = await api.updatePolicy(body);
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
| **policyId** | `number` |  | [Defaults to `undefined`] |
| **updatePolicyRequest** | [UpdatePolicyRequest](UpdatePolicyRequest.md) |  | |

### Return type

[**PolicyResponse**](PolicyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Policy updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Policy not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

