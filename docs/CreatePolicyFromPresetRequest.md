
# CreatePolicyFromPresetRequest


## Properties

Name | Type
------------ | -------------
`presetId` | string
`name` | string
`isDefault` | boolean

## Example

```typescript
import type { CreatePolicyFromPresetRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "presetId": null,
  "name": null,
  "isDefault": null,
} satisfies CreatePolicyFromPresetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePolicyFromPresetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


