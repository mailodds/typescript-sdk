
# BatchDeliverResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`total` | number
`accepted` | number
`rejected` | [Array&lt;BatchDeliverResponseRejectedInner&gt;](BatchDeliverResponseRejectedInner.md)
`status` | string
`delivery` | [BatchDeliverResponseDelivery](BatchDeliverResponseDelivery.md)

## Example

```typescript
import type { BatchDeliverResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "total": null,
  "accepted": null,
  "rejected": null,
  "status": null,
  "delivery": null,
} satisfies BatchDeliverResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchDeliverResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


