
# ListInboundMessages200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`messages` | Array&lt;object&gt;
`total` | number
`page` | number
`perPage` | number
`pages` | number

## Example

```typescript
import type { ListInboundMessages200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "messages": null,
  "total": null,
  "page": null,
  "perPage": null,
  "pages": null,
} satisfies ListInboundMessages200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListInboundMessages200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


