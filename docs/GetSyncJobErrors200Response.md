
# GetSyncJobErrors200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`errors` | Array&lt;object&gt;
`total` | number
`page` | number
`perPage` | number

## Example

```typescript
import type { GetSyncJobErrors200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "errors": null,
  "total": null,
  "page": null,
  "perPage": null,
} satisfies GetSyncJobErrors200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSyncJobErrors200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


