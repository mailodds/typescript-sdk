
# QueryProducts200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`products` | [Array&lt;StoreProduct&gt;](StoreProduct.md)
`total` | number
`page` | number
`perPage` | number
`pages` | number
`facets` | [ProductFacets](ProductFacets.md)

## Example

```typescript
import type { QueryProducts200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "products": null,
  "total": null,
  "page": null,
  "perPage": null,
  "pages": null,
  "facets": null,
} satisfies QueryProducts200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QueryProducts200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


