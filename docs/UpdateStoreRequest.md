
# UpdateStoreRequest


## Properties

Name | Type
------------ | -------------
`storeName` | string
`syncIntervalSeconds` | number
`settings` | object
`credentials` | object

## Example

```typescript
import type { UpdateStoreRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "storeName": null,
  "syncIntervalSeconds": null,
  "settings": null,
  "credentials": null,
} satisfies UpdateStoreRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateStoreRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


