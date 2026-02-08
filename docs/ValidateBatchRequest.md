
# ValidateBatchRequest


## Properties

Name | Type
------------ | -------------
`emails` | Array&lt;string&gt;
`depth` | string
`policyId` | number

## Example

```typescript
import type { ValidateBatchRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "emails": null,
  "depth": null,
  "policyId": null,
} satisfies ValidateBatchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateBatchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


