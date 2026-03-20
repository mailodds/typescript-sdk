# ReputationPoliciesApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReputationPolicy**](ReputationPoliciesApi.md#createreputationpolicy) | **POST** /v1/reputation-policies | Create a reputation policy |
| [**createReputationPolicyFromPreset**](ReputationPoliciesApi.md#createreputationpolicyfrompreset) | **POST** /v1/reputation-policies/from-preset | Create a reputation policy from preset |
| [**deleteReputationPolicy**](ReputationPoliciesApi.md#deletereputationpolicy) | **DELETE** /v1/reputation-policies/{policy_id} | Delete a reputation policy |
| [**getReputationPolicy**](ReputationPoliciesApi.md#getreputationpolicy) | **GET** /v1/reputation-policies/{policy_id} | Get a reputation policy |
| [**getReputationPolicyStatus**](ReputationPoliciesApi.md#getreputationpolicystatus) | **GET** /v1/reputation-policies/{policy_id}/status | Get reputation policy status |
| [**listReputationPolicies**](ReputationPoliciesApi.md#listreputationpolicies) | **GET** /v1/reputation-policies | List reputation policies |
| [**testReputationPolicy**](ReputationPoliciesApi.md#testreputationpolicy) | **POST** /v1/reputation-policies/{policy_id}/test | Test a reputation policy |
| [**updateReputationPolicy**](ReputationPoliciesApi.md#updatereputationpolicy) | **PUT** /v1/reputation-policies/{policy_id} | Update a reputation policy |



## createReputationPolicy

> createReputationPolicy()

Create a reputation policy

Create a new reputation policy with custom rules and thresholds.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { CreateReputationPolicyRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  try {
    const data = await api.createReputationPolicy();
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
| **201** | Create a reputation policy |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createReputationPolicyFromPreset

> createReputationPolicyFromPreset()

Create a reputation policy from preset

Create a reputation policy from a predefined preset template.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { CreateReputationPolicyFromPresetRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  try {
    const data = await api.createReputationPolicyFromPreset();
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
| **201** | Create a reputation policy from preset |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteReputationPolicy

> deleteReputationPolicy(policyId)

Delete a reputation policy

Soft-delete a reputation policy.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { DeleteReputationPolicyRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  const body = {
    // string
    policyId: policyId_example,
  } satisfies DeleteReputationPolicyRequest;

  try {
    const data = await api.deleteReputationPolicy(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Delete a reputation policy |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReputationPolicy

> getReputationPolicy(policyId)

Get a reputation policy

Retrieve a single reputation policy by ID.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { GetReputationPolicyRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  const body = {
    // string
    policyId: policyId_example,
  } satisfies GetReputationPolicyRequest;

  try {
    const data = await api.getReputationPolicy(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get a reputation policy |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReputationPolicyStatus

> getReputationPolicyStatus(policyId)

Get reputation policy status

Evaluate a policy and return per-domain status results.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { GetReputationPolicyStatusRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  const body = {
    // string
    policyId: policyId_example,
  } satisfies GetReputationPolicyStatusRequest;

  try {
    const data = await api.getReputationPolicyStatus(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get reputation policy status |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listReputationPolicies

> listReputationPolicies()

List reputation policies

List all reputation policies for the account.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { ListReputationPoliciesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  try {
    const data = await api.listReputationPolicies();
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
| **200** | List reputation policies |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testReputationPolicy

> testReputationPolicy(policyId)

Test a reputation policy

Dry-run evaluation of a reputation policy without applying actions.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { TestReputationPolicyRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  const body = {
    // string
    policyId: policyId_example,
  } satisfies TestReputationPolicyRequest;

  try {
    const data = await api.testReputationPolicy(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Test a reputation policy |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateReputationPolicy

> updateReputationPolicy(policyId)

Update a reputation policy

Update an existing reputation policy.

### Example

```ts
import {
  Configuration,
  ReputationPoliciesApi,
} from '@mailodds/sdk';
import type { UpdateReputationPolicyRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReputationPoliciesApi(config);

  const body = {
    // string
    policyId: policyId_example,
  } satisfies UpdateReputationPolicyRequest;

  try {
    const data = await api.updateReputationPolicy(body);
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
| **policyId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Update a reputation policy |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

