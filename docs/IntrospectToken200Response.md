
# IntrospectToken200Response


## Properties

Name | Type
------------ | -------------
`active` | boolean
`scope` | string
`clientId` | string
`username` | string
`tokenType` | string
`exp` | number
`iat` | number
`accountId` | number

## Example

```typescript
import type { IntrospectToken200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "scope": null,
  "clientId": null,
  "username": null,
  "tokenType": null,
  "exp": null,
  "iat": null,
  "accountId": null,
} satisfies IntrospectToken200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntrospectToken200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


