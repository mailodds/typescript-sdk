
# ValidationResult

Individual result from a bulk validation job

## Properties

Name | Type
------------ | -------------
`email` | string
`status` | string
`subStatus` | string
`action` | string
`domain` | string
`mxHost` | string
`checks` | { [key: string]: any; }
`suppression` | [ValidationResultSuppression](ValidationResultSuppression.md)
`processedAt` | Date

## Example

```typescript
import type { ValidationResult } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "status": null,
  "subStatus": null,
  "action": null,
  "domain": null,
  "mxHost": null,
  "checks": null,
  "suppression": null,
  "processedAt": null,
} satisfies ValidationResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


