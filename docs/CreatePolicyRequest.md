
# CreatePolicyRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`isDefault` | boolean
`rules` | [Array&lt;PolicyRule&gt;](PolicyRule.md)

## Example

```typescript
import type { CreatePolicyRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "isDefault": null,
  "rules": null,
} satisfies CreatePolicyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePolicyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


