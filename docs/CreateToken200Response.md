
# CreateToken200Response


## Properties

Name | Type
------------ | -------------
`accessToken` | string
`tokenType` | string
`expiresIn` | number
`refreshToken` | string
`scope` | string

## Example

```typescript
import type { CreateToken200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "accessToken": null,
  "tokenType": Bearer,
  "expiresIn": null,
  "refreshToken": null,
  "scope": null,
} satisfies CreateToken200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateToken200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


