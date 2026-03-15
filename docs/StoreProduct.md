
# StoreProduct


## Properties

Name | Type
------------ | -------------
`id` | string
`storeId` | string
`externalId` | string
`sku` | string
`title` | string
`description` | string
`priceCurrent` | number
`priceOriginal` | number
`currency` | string
`saleStart` | Date
`saleEnd` | Date
`stockStatus` | string
`stockQuantity` | number
`imageUrl` | string
`additionalImages` | Array&lt;string&gt;
`categories` | Array&lt;string&gt;
`tags` | Array&lt;string&gt;
`productUrl` | string
`variants` | Array&lt;object&gt;
`isActive` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { StoreProduct } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "storeId": null,
  "externalId": null,
  "sku": null,
  "title": null,
  "description": null,
  "priceCurrent": null,
  "priceOriginal": null,
  "currency": null,
  "saleStart": null,
  "saleEnd": null,
  "stockStatus": null,
  "stockQuantity": null,
  "imageUrl": null,
  "additionalImages": null,
  "categories": null,
  "tags": null,
  "productUrl": null,
  "variants": null,
  "isActive": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies StoreProduct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoreProduct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


