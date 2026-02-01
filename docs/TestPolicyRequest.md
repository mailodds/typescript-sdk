
# TestPolicyRequest


## Properties

Name | Type
------------ | -------------
`policyId` | number
`testResult` | [TestPolicyRequestTestResult](TestPolicyRequestTestResult.md)

## Example

```typescript
import type { TestPolicyRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "policyId": null,
  "testResult": null,
} satisfies TestPolicyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestPolicyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


