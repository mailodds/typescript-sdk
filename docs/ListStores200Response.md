
# ListStores200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`stores` | [Array&lt;StoreConnection&gt;](StoreConnection.md)

## Example

```typescript
import type { ListStores200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "stores": null,
} satisfies ListStores200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListStores200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


