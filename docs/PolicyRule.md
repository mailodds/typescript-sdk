
# PolicyRule


## Properties

Name | Type
------------ | -------------
`id` | number
`type` | string
`condition` | object
`action` | [PolicyRuleAction](PolicyRuleAction.md)
`sequence` | number
`isEnabled` | boolean

## Example

```typescript
import type { PolicyRule } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "condition": null,
  "action": null,
  "sequence": null,
  "isEnabled": null,
} satisfies PolicyRule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyRule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


