
# CreateStoreRequest


## Properties

Name | Type
------------ | -------------
`platform` | string
`storeName` | string
`storeUrl` | string
`authMethod` | string
`settings` | object

## Example

```typescript
import type { CreateStoreRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "platform": null,
  "storeName": null,
  "storeUrl": null,
  "authMethod": null,
  "settings": null,
} satisfies CreateStoreRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStoreRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


