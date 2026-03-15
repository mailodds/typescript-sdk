
# BatchProductsRequestProductsInner


## Properties

Name | Type
------------ | -------------
`externalId` | string
`title` | string
`productUrl` | string
`sku` | string
`description` | string
`priceCurrent` | number
`priceOriginal` | number
`currency` | string
`stockStatus` | string
`stockQuantity` | number
`imageUrl` | string
`additionalImages` | Array&lt;string&gt;
`categories` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;
`variants` | Array&lt;object&gt;

## Example

```typescript
import type { BatchProductsRequestProductsInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "externalId": null,
  "title": null,
  "productUrl": null,
  "sku": null,
  "description": null,
  "priceCurrent": null,
  "priceOriginal": null,
  "currency": null,
  "stockStatus": null,
  "stockQuantity": null,
  "imageUrl": null,
  "additionalImages": null,
  "categories": null,
  "tags": null,
  "variants": null,
} satisfies BatchProductsRequestProductsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchProductsRequestProductsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


