
# CreateStorefrontDomainRequest


## Properties

Name | Type
------------ | -------------
`fqdn` | string
`storeId` | string

## Example

```typescript
import type { CreateStorefrontDomainRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "fqdn": shop.merchant.com,
  "storeId": uuid,
} satisfies CreateStorefrontDomainRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStorefrontDomainRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


