
# SyncResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`scheduled` | boolean
`storeId` | string
`idempotent` | boolean
`existingJobId` | string

## Example

```typescript
import type { SyncResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "scheduled": null,
  "storeId": null,
  "idempotent": null,
  "existingJobId": null,
} satisfies SyncResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SyncResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


