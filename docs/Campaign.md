
# Campaign


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`status` | string
`listId` | string
`domainId` | string
`fromEmail` | string
`fromName` | string
`replyTo` | string
`scheduledAt` | Date
`sentAt` | Date
`cancelledAt` | Date
`variantCount` | number
`stats` | [CampaignStats](CampaignStats.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Campaign } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "status": null,
  "listId": null,
  "domainId": null,
  "fromEmail": null,
  "fromName": null,
  "replyTo": null,
  "scheduledAt": null,
  "sentAt": null,
  "cancelledAt": null,
  "variantCount": null,
  "stats": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Campaign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Campaign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


