
# UpdateContactRequest


## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`customFields` | object

## Example

```typescript
import type { UpdateContactRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "customFields": null,
} satisfies UpdateContactRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateContactRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


