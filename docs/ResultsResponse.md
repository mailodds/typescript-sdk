
# ResultsResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`results` | [Array&lt;ValidationResult&gt;](ValidationResult.md)
`pagination` | [Pagination](Pagination.md)

## Example

```typescript
import type { ResultsResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "results": null,
  "pagination": null,
} satisfies ResultsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResultsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


