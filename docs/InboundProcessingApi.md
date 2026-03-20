# InboundProcessingApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**correctInboundMessage**](InboundProcessingApi.md#correctinboundmessageoperation) | **PATCH** /v1/inbound-messages/{message_id}/correction | Correct inbound message classification |
| [**getBounceStats**](InboundProcessingApi.md#getbouncestats) | **GET** /v1/bounce-stats | Get bounce statistics |
| [**getBounceStatsSummary**](InboundProcessingApi.md#getbouncestatssummary) | **GET** /v1/bounce-stats/summary | Get bounce statistics summary |
| [**getComplaintAssessment**](InboundProcessingApi.md#getcomplaintassessment) | **GET** /v1/complaint-assessment | Get complaint assessment |
| [**getInboundMessage**](InboundProcessingApi.md#getinboundmessage) | **GET** /v1/inbound-messages/{message_id} | Get inbound message |
| [**listInboundMessages**](InboundProcessingApi.md#listinboundmessages) | **GET** /v1/inbound-messages | List inbound messages |



## correctInboundMessage

> GetInboundMessage200Response correctInboundMessage(messageId, correctInboundMessageRequest)

Correct inbound message classification

Submit a human correction for an inbound message classification. Requires Pro+ plan.

### Example

```ts
import {
  Configuration,
  InboundProcessingApi,
} from '@mailodds/sdk';
import type { CorrectInboundMessageOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundProcessingApi(config);

  const body = {
    // string
    messageId: messageId_example,
    // CorrectInboundMessageRequest
    correctInboundMessageRequest: ...,
  } satisfies CorrectInboundMessageOperationRequest;

  try {
    const data = await api.correctInboundMessage(body);
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
| **messageId** | `string` |  | [Defaults to `undefined`] |
| **correctInboundMessageRequest** | [CorrectInboundMessageRequest](CorrectInboundMessageRequest.md) |  | |

### Return type

[**GetInboundMessage200Response**](GetInboundMessage200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Message updated with correction |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBounceStats

> GetBounceStats200Response getBounceStats(domainId, period, groupBy)

Get bounce statistics

Get bounce and complaint statistics grouped by time period. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  InboundProcessingApi,
} from '@mailodds/sdk';
import type { GetBounceStatsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundProcessingApi(config);

  const body = {
    // string | Filter by sending domain ID (optional)
    domainId: domainId_example,
    // '24h' | '7d' | '30d' | '90d' | Time period (optional)
    period: period_example,
    // 'day' | 'week' | 'campaign' | Grouping interval (optional)
    groupBy: groupBy_example,
  } satisfies GetBounceStatsRequest;

  try {
    const data = await api.getBounceStats(body);
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
| **domainId** | `string` | Filter by sending domain ID | [Optional] [Defaults to `undefined`] |
| **period** | `24h`, `7d`, `30d`, `90d` | Time period | [Optional] [Defaults to `&#39;7d&#39;`] [Enum: 24h, 7d, 30d, 90d] |
| **groupBy** | `day`, `week`, `campaign` | Grouping interval | [Optional] [Defaults to `&#39;day&#39;`] [Enum: day, week, campaign] |

### Return type

[**GetBounceStats200Response**](GetBounceStats200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bounce statistics |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBounceStatsSummary

> GetBounceStatsSummary200Response getBounceStatsSummary(domainId, period)

Get bounce statistics summary

Get aggregated bounce and complaint statistics. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  InboundProcessingApi,
} from '@mailodds/sdk';
import type { GetBounceStatsSummaryRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundProcessingApi(config);

  const body = {
    // string | Filter by sending domain ID (optional)
    domainId: domainId_example,
    // '24h' | '7d' | '30d' | Time period (optional)
    period: period_example,
  } satisfies GetBounceStatsSummaryRequest;

  try {
    const data = await api.getBounceStatsSummary(body);
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
| **domainId** | `string` | Filter by sending domain ID | [Optional] [Defaults to `undefined`] |
| **period** | `24h`, `7d`, `30d` | Time period | [Optional] [Defaults to `&#39;30d&#39;`] [Enum: 24h, 7d, 30d] |

### Return type

[**GetBounceStatsSummary200Response**](GetBounceStatsSummary200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bounce statistics summary |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComplaintAssessment

> GetComplaintAssessment200Response getComplaintAssessment(domainId, period)

Get complaint assessment

Assess complaint risk based on recent inbound data. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  InboundProcessingApi,
} from '@mailodds/sdk';
import type { GetComplaintAssessmentRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundProcessingApi(config);

  const body = {
    // string | Filter by sending domain ID (optional)
    domainId: domainId_example,
    // '24h' | '7d' | '30d' | Time period (optional)
    period: period_example,
  } satisfies GetComplaintAssessmentRequest;

  try {
    const data = await api.getComplaintAssessment(body);
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
| **domainId** | `string` | Filter by sending domain ID | [Optional] [Defaults to `undefined`] |
| **period** | `24h`, `7d`, `30d` | Time period | [Optional] [Defaults to `&#39;30d&#39;`] [Enum: 24h, 7d, 30d] |

### Return type

[**GetComplaintAssessment200Response**](GetComplaintAssessment200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complaint assessment |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInboundMessage

> GetInboundMessage200Response getInboundMessage(messageId)

Get inbound message

Get a single inbound message with full body content. Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  InboundProcessingApi,
} from '@mailodds/sdk';
import type { GetInboundMessageRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundProcessingApi(config);

  const body = {
    // string
    messageId: messageId_example,
  } satisfies GetInboundMessageRequest;

  try {
    const data = await api.getInboundMessage(body);
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
| **messageId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetInboundMessage200Response**](GetInboundMessage200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inbound message details |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listInboundMessages

> ListInboundMessages200Response listInboundMessages(category, domainId, since, until, isRead, recipient, search, page, perPage)

List inbound messages

List inbound messages (bounces, complaints, replies, OOO). Requires Growth+ plan.

### Example

```ts
import {
  Configuration,
  InboundProcessingApi,
} from '@mailodds/sdk';
import type { ListInboundMessagesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InboundProcessingApi(config);

  const body = {
    // 'hard_bounce' | 'soft_bounce' | 'complaint' | 'reply' | 'out_of_office' | 'autoresponder' | 'challenge' | 'unknown' | Filter by category (optional)
    category: category_example,
    // string | Filter by sending domain ID (optional)
    domainId: domainId_example,
    // Date | Start date (ISO 8601) (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | End date (ISO 8601) (optional)
    until: 2013-10-20T19:20:30+01:00,
    // boolean | Filter by read status (optional)
    isRead: true,
    // string | Filter by original recipient (optional)
    recipient: recipient_example,
    // string | Search in subject and body (optional)
    search: search_example,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies ListInboundMessagesRequest;

  try {
    const data = await api.listInboundMessages(body);
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
| **category** | `hard_bounce`, `soft_bounce`, `complaint`, `reply`, `out_of_office`, `autoresponder`, `challenge`, `unknown` | Filter by category | [Optional] [Defaults to `undefined`] [Enum: hard_bounce, soft_bounce, complaint, reply, out_of_office, autoresponder, challenge, unknown] |
| **domainId** | `string` | Filter by sending domain ID | [Optional] [Defaults to `undefined`] |
| **since** | `Date` | Start date (ISO 8601) | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | End date (ISO 8601) | [Optional] [Defaults to `undefined`] |
| **isRead** | `boolean` | Filter by read status | [Optional] [Defaults to `undefined`] |
| **recipient** | `string` | Filter by original recipient | [Optional] [Defaults to `undefined`] |
| **search** | `string` | Search in subject and body | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**ListInboundMessages200Response**](ListInboundMessages200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of inbound messages |  -  |
| **403** | Forbidden - Insufficient permissions or no credits |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

