
# SuppressionCheckResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`email` | string
`suppressed` | boolean
`matchType` | string
`matchValue` | string

## Example

```typescript
import type { SuppressionCheckResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "email": null,
  "suppressed": null,
  "matchType": null,
  "matchValue": null,
} satisfies SuppressionCheckResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuppressionCheckResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


