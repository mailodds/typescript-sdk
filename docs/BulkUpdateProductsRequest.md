
# BulkUpdateProductsRequest


## Properties

Name | Type
------------ | -------------
`productIds` | Array&lt;string&gt;
`isActive` | boolean

## Example

```typescript
import type { BulkUpdateProductsRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "productIds": null,
  "isActive": null,
} satisfies BulkUpdateProductsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateProductsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


