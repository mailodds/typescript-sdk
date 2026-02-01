
# TestPolicyRequestTestResult

Mock validation result to test against

## Properties

Name | Type
------------ | -------------
`email` | string
`status` | string
`action` | string
`domain` | string
`subStatus` | string

## Example

```typescript
import type { TestPolicyRequestTestResult } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "status": null,
  "action": null,
  "domain": null,
  "subStatus": null,
} satisfies TestPolicyRequestTestResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestPolicyRequestTestResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


