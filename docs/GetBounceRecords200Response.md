
# GetBounceRecords200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`records` | [Array&lt;GetBounceRecords200ResponseRecordsInner&gt;](GetBounceRecords200ResponseRecordsInner.md)
`pagination` | [Pagination](Pagination.md)

## Example

```typescript
import type { GetBounceRecords200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "records": null,
  "pagination": null,
} satisfies GetBounceRecords200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBounceRecords200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


