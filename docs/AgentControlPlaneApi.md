# AgentControlPlaneApi

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMcpCapabilities**](AgentControlPlaneApi.md#getmcpcapabilities) | **GET** /v1/mcp/capabilities | Get MCP capabilities |



## getMcpCapabilities

> McpCapabilities getMcpCapabilities()

Get MCP capabilities

Returns a static capability manifest listing all MCP tools organized by pillar. Used by AI agents for tool discovery and scope-based self-correction.

### Example

```ts
import {
  Configuration,
  AgentControlPlaneApi,
} from '@mailodds/sdk';
import type { GetMcpCapabilitiesRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new AgentControlPlaneApi();

  try {
    const data = await api.getMcpCapabilities();
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

[**McpCapabilities**](McpCapabilities.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | MCP capability manifest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

