
# AddSuppressionResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`added` | number
`duplicates` | number
`invalid` | number
`total` | number

## Example

```typescript
import type { AddSuppressionResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "added": null,
  "duplicates": null,
  "invalid": null,
  "total": null,
} satisfies AddSuppressionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddSuppressionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


