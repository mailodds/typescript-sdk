
# ValidationResponsePolicyApplied

Present when a validation policy modified the result.

## Properties

Name | Type
------------ | -------------
`policyId` | number
`policyName` | string
`ruleId` | number
`ruleType` | string

## Example

```typescript
import type { ValidationResponsePolicyApplied } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "policyId": null,
  "policyName": null,
  "ruleId": null,
  "ruleType": null,
} satisfies ValidationResponsePolicyApplied

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationResponsePolicyApplied
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


