
# SuppressionAuditResponseEntriesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`eventType` | string
`eventCategory` | string
`details` | object
`createdAt` | Date

## Example

```typescript
import type { SuppressionAuditResponseEntriesInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "eventType": null,
  "eventCategory": null,
  "details": null,
  "createdAt": null,
} satisfies SuppressionAuditResponseEntriesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuppressionAuditResponseEntriesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


