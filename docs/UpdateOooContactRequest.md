
# UpdateOooContactRequest


## Properties

Name | Type
------------ | -------------
`isActive` | boolean
`oooType` | string
`durationDays` | number

## Example

```typescript
import type { UpdateOooContactRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "isActive": null,
  "oooType": null,
  "durationDays": null,
} satisfies UpdateOooContactRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateOooContactRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


