
# DeliverResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`messageId` | string
`status` | string
`delivery` | [DeliverResponseDelivery](DeliverResponseDelivery.md)
`validation` | object
`contentScan` | object

## Example

```typescript
import type { DeliverResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "messageId": null,
  "status": null,
  "delivery": null,
  "validation": null,
  "contentScan": null,
} satisfies DeliverResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeliverResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


