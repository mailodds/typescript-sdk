
# McpCapabilities

MCP capability manifest for AI agent discovery

## Properties

Name | Type
------------ | -------------
`version` | string
`serverName` | string
`toolCount` | number
`pillars` | [Array&lt;McpCapabilitiesPillarsInner&gt;](McpCapabilitiesPillarsInner.md)
`supportedTransports` | Array&lt;string&gt;
`authRequired` | boolean

## Example

```typescript
import type { McpCapabilities } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "version": 1.0,
  "serverName": null,
  "toolCount": null,
  "pillars": null,
  "supportedTransports": null,
  "authRequired": null,
} satisfies McpCapabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpCapabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


