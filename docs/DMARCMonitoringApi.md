# DMARCMonitoringApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDmarcDomain**](DMARCMonitoringApi.md#adddmarcdomainoperation) | **POST** /v1/dmarc-domains | Add DMARC domain |
| [**getDmarcDomain**](DMARCMonitoringApi.md#getdmarcdomain) | **GET** /v1/dmarc-domains/{domain_id} | Get DMARC domain |
| [**getDmarcRecommendation**](DMARCMonitoringApi.md#getdmarcrecommendation) | **GET** /v1/dmarc-domains/{domain_id}/recommendation | Get DMARC policy recommendation |
| [**getDmarcSources**](DMARCMonitoringApi.md#getdmarcsources) | **GET** /v1/dmarc-domains/{domain_id}/sources | Get DMARC sending sources |
| [**getDmarcTrend**](DMARCMonitoringApi.md#getdmarctrend) | **GET** /v1/dmarc-domains/{domain_id}/trend | Get DMARC trend |
| [**listDmarcDomains**](DMARCMonitoringApi.md#listdmarcdomains) | **GET** /v1/dmarc-domains | List DMARC domains |
| [**verifyDmarcDomain**](DMARCMonitoringApi.md#verifydmarcdomain) | **POST** /v1/dmarc-domains/{domain_id}/verify | Verify DMARC DNS records |



## addDmarcDomain

> AddDmarcDomain201Response addDmarcDomain(addDmarcDomainRequest)

Add DMARC domain

Add a domain for DMARC monitoring. A unique reporting address is generated for receiving aggregate DMARC reports.

### Example

```ts
import {
  Configuration,
  DMARCMonitoringApi,
} from '@mailodds/sdk';
import type { AddDmarcDomainOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DMARCMonitoringApi(config);

  const body = {
    // AddDmarcDomainRequest
    addDmarcDomainRequest: ...,
  } satisfies AddDmarcDomainOperationRequest;

  try {
    const data = await api.addDmarcDomain(body);
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
| **addDmarcDomainRequest** | [AddDmarcDomainRequest](AddDmarcDomainRequest.md) |  | |

### Return type

[**AddDmarcDomain201Response**](AddDmarcDomain201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Domain added |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDmarcDomain

> GetDmarcDomain200Response getDmarcDomain(domainId, days)

Get DMARC domain

Get a single DMARC domain with summary statistics including pass/fail rates.

### Example

```ts
import {
  Configuration,
  DMARCMonitoringApi,
} from '@mailodds/sdk';
import type { GetDmarcDomainRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DMARCMonitoringApi(config);

  const body = {
    // string | DMARC domain UUID
    domainId: domainId_example,
    // number | Number of days for summary stats (optional)
    days: 56,
  } satisfies GetDmarcDomainRequest;

  try {
    const data = await api.getDmarcDomain(body);
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
| **domainId** | `string` | DMARC domain UUID | [Defaults to `undefined`] |
| **days** | `number` | Number of days for summary stats | [Optional] [Defaults to `30`] |

### Return type

[**GetDmarcDomain200Response**](GetDmarcDomain200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domain with summary stats |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDmarcRecommendation

> GetDmarcRecommendation200Response getDmarcRecommendation(domainId)

Get DMARC policy recommendation

Get a recommendation for upgrading the domain\&#39;s DMARC policy based on alignment data.

### Example

```ts
import {
  Configuration,
  DMARCMonitoringApi,
} from '@mailodds/sdk';
import type { GetDmarcRecommendationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DMARCMonitoringApi(config);

  const body = {
    // string | DMARC domain UUID
    domainId: domainId_example,
  } satisfies GetDmarcRecommendationRequest;

  try {
    const data = await api.getDmarcRecommendation(body);
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
| **domainId** | `string` | DMARC domain UUID | [Defaults to `undefined`] |

### Return type

[**GetDmarcRecommendation200Response**](GetDmarcRecommendation200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Policy recommendation |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDmarcSources

> GetDmarcSources200Response getDmarcSources(domainId, days, page, perPage)

Get DMARC sending sources

Get sending IPs that have sent email for this domain with their DKIM/SPF alignment status.

### Example

```ts
import {
  Configuration,
  DMARCMonitoringApi,
} from '@mailodds/sdk';
import type { GetDmarcSourcesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DMARCMonitoringApi(config);

  const body = {
    // string | DMARC domain UUID
    domainId: domainId_example,
    // number | Number of days to look back (optional)
    days: 56,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies GetDmarcSourcesRequest;

  try {
    const data = await api.getDmarcSources(body);
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
| **domainId** | `string` | DMARC domain UUID | [Defaults to `undefined`] |
| **days** | `number` | Number of days to look back | [Optional] [Defaults to `30`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**GetDmarcSources200Response**](GetDmarcSources200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sending sources with alignment status |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDmarcTrend

> GetDmarcTrend200Response getDmarcTrend(domainId, days)

Get DMARC trend

Get daily pass/fail trend data for DMARC authentication over the specified period.

### Example

```ts
import {
  Configuration,
  DMARCMonitoringApi,
} from '@mailodds/sdk';
import type { GetDmarcTrendRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DMARCMonitoringApi(config);

  const body = {
    // string | DMARC domain UUID
    domainId: domainId_example,
    // number | Number of days of trend data (optional)
    days: 56,
  } satisfies GetDmarcTrendRequest;

  try {
    const data = await api.getDmarcTrend(body);
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
| **domainId** | `string` | DMARC domain UUID | [Defaults to `undefined`] |
| **days** | `number` | Number of days of trend data | [Optional] [Defaults to `30`] |

### Return type

[**GetDmarcTrend200Response**](GetDmarcTrend200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Daily trend data |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDmarcDomains

> ListDmarcDomains200Response listDmarcDomains()

List DMARC domains

List all domains being monitored for DMARC compliance.

### Example

```ts
import {
  Configuration,
  DMARCMonitoringApi,
} from '@mailodds/sdk';
import type { ListDmarcDomainsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DMARCMonitoringApi(config);

  try {
    const data = await api.listDmarcDomains();
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

[**ListDmarcDomains200Response**](ListDmarcDomains200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of monitored domains |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyDmarcDomain

> AddDmarcDomain201Response verifyDmarcDomain(domainId)

Verify DMARC DNS records

Check that the domain has the correct DMARC TXT record pointing to the MailOdds reporting address.

### Example

```ts
import {
  Configuration,
  DMARCMonitoringApi,
} from '@mailodds/sdk';
import type { VerifyDmarcDomainRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DMARCMonitoringApi(config);

  const body = {
    // string | DMARC domain UUID
    domainId: domainId_example,
  } satisfies VerifyDmarcDomainRequest;

  try {
    const data = await api.verifyDmarcDomain(body);
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
| **domainId** | `string` | DMARC domain UUID | [Defaults to `undefined`] |

### Return type

[**AddDmarcDomain201Response**](AddDmarcDomain201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification result |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

