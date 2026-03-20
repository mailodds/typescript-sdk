# InboundRulesApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInboundRule**](InboundRulesApi.md#createinboundrule) | **POST** /v1/sending-domains/{domain_id}/inbound-rules | Create an inbound rule |
| [**deleteInboundRule**](InboundRulesApi.md#deleteinboundrule) | **DELETE** /v1/sending-domains/{domain_id}/inbound-rules/{rule_id} | Delete an inbound rule |
| [**dryRunInboundRules**](InboundRulesApi.md#dryruninboundrules) | **POST** /v1/sending-domains/{domain_id}/inbound-rules/dry-run | Dry-run inbound rules |
| [**getInboundRule**](InboundRulesApi.md#getinboundrule) | **GET** /v1/sending-domains/{domain_id}/inbound-rules/{rule_id} | Get an inbound rule |
| [**listInboundRules**](InboundRulesApi.md#listinboundrules) | **GET** /v1/sending-domains/{domain_id}/inbound-rules | List inbound rules |
| [**updateInboundRule**](InboundRulesApi.md#updateinboundrule) | **PUT** /v1/sending-domains/{domain_id}/inbound-rules/{rule_id} | Update an inbound rule |



## createInboundRule

> createInboundRule(domainId)

Create an inbound rule

Create an inbound routing rule for a sending domain.

### Example

```ts
import {
  Configuration,
  InboundRulesApi,
} from '@mailodds/sdk';
import type { CreateInboundRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundRulesApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies CreateInboundRuleRequest;

  try {
    const data = await api.createInboundRule(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |

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
| **201** | Create an inbound rule |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteInboundRule

> deleteInboundRule(domainId, ruleId)

Delete an inbound rule

Delete an inbound routing rule.

### Example

```ts
import {
  Configuration,
  InboundRulesApi,
} from '@mailodds/sdk';
import type { DeleteInboundRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundRulesApi(config);

  const body = {
    // string
    domainId: domainId_example,
    // string
    ruleId: ruleId_example,
  } satisfies DeleteInboundRuleRequest;

  try {
    const data = await api.deleteInboundRule(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |
| **ruleId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Delete an inbound rule |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dryRunInboundRules

> dryRunInboundRules(domainId)

Dry-run inbound rules

Evaluate inbound rules against a test message without side effects.

### Example

```ts
import {
  Configuration,
  InboundRulesApi,
} from '@mailodds/sdk';
import type { DryRunInboundRulesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundRulesApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies DryRunInboundRulesRequest;

  try {
    const data = await api.dryRunInboundRules(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Dry-run inbound rules |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInboundRule

> getInboundRule(domainId, ruleId)

Get an inbound rule

Retrieve a specific inbound routing rule by ID.

### Example

```ts
import {
  Configuration,
  InboundRulesApi,
} from '@mailodds/sdk';
import type { GetInboundRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundRulesApi(config);

  const body = {
    // string
    domainId: domainId_example,
    // string
    ruleId: ruleId_example,
  } satisfies GetInboundRuleRequest;

  try {
    const data = await api.getInboundRule(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |
| **ruleId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Get an inbound rule |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listInboundRules

> listInboundRules(domainId)

List inbound rules

List all inbound routing rules for a sending domain.

### Example

```ts
import {
  Configuration,
  InboundRulesApi,
} from '@mailodds/sdk';
import type { ListInboundRulesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundRulesApi(config);

  const body = {
    // string
    domainId: domainId_example,
  } satisfies ListInboundRulesRequest;

  try {
    const data = await api.listInboundRules(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | List inbound rules |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateInboundRule

> updateInboundRule(domainId, ruleId)

Update an inbound rule

Update an existing inbound routing rule.

### Example

```ts
import {
  Configuration,
  InboundRulesApi,
} from '@mailodds/sdk';
import type { UpdateInboundRuleRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundRulesApi(config);

  const body = {
    // string
    domainId: domainId_example,
    // string
    ruleId: ruleId_example,
  } satisfies UpdateInboundRuleRequest;

  try {
    const data = await api.updateInboundRule(body);
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
| **domainId** | `string` |  | [Defaults to `undefined`] |
| **ruleId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | Update an inbound rule |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

