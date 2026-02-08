
# ValidateBatch200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`total` | number
`summary` | [ValidateBatch200ResponseSummary](ValidateBatch200ResponseSummary.md)
`results` | [Array&lt;ValidationResponse&gt;](ValidationResponse.md)

## Example

```typescript
import type { ValidateBatch200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "total": null,
  "summary": null,
  "results": null,
} satisfies ValidateBatch200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateBatch200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


