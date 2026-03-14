
# ListBlacklistMonitors200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`monitors` | [Array&lt;BlacklistMonitor&gt;](BlacklistMonitor.md)

## Example

```typescript
import type { ListBlacklistMonitors200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "monitors": null,
} satisfies ListBlacklistMonitors200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListBlacklistMonitors200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


