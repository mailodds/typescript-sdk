
# SuppressionAuditResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`entries` | [Array&lt;SuppressionAuditResponseEntriesInner&gt;](SuppressionAuditResponseEntriesInner.md)
`pagination` | [Pagination](Pagination.md)

## Example

```typescript
import type { SuppressionAuditResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "entries": null,
  "pagination": null,
} satisfies SuppressionAuditResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuppressionAuditResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


