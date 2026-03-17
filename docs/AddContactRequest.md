
# AddContactRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`firstName` | string
`lastName` | string
`customFields` | object

## Example

```typescript
import type { AddContactRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "firstName": null,
  "lastName": null,
  "customFields": null,
} satisfies AddContactRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddContactRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


