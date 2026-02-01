
# PolicyListResponseLimits


## Properties

Name | Type
------------ | -------------
`maxPolicies` | number
`maxRulesPerPolicy` | number
`plan` | string

## Example

```typescript
import type { PolicyListResponseLimits } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "maxPolicies": null,
  "maxRulesPerPolicy": null,
  "plan": null,
} satisfies PolicyListResponseLimits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyListResponseLimits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


