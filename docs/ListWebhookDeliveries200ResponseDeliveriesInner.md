
# ListWebhookDeliveries200ResponseDeliveriesInner


## Properties

Name | Type
------------ | -------------
`id` | number
`eventType` | string
`status` | string
`statusCode` | number
`createdAt` | Date
`jobId` | string

## Example

```typescript
import type { ListWebhookDeliveries200ResponseDeliveriesInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "eventType": null,
  "status": null,
  "statusCode": null,
  "createdAt": null,
  "jobId": null,
} satisfies ListWebhookDeliveries200ResponseDeliveriesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListWebhookDeliveries200ResponseDeliveriesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


