
# GetOooStatus200Response


## Properties

Name | Type
------------ | -------------
`email` | string
`isOoo` | boolean
`detectedAt` | Date
`expiresAt` | Date
`oooType` | string

## Example

```typescript
import type { GetOooStatus200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "isOoo": null,
  "detectedAt": null,
  "expiresAt": null,
  "oooType": null,
} satisfies GetOooStatus200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetOooStatus200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


