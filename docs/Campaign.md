
# Campaign


## Properties

Name | Type
------------ | -------------
`id` | string
`accountId` | number
`name` | string
`status` | string
`domainId` | string
`subject` | string
`fromAddress` | string
`replyTo` | string
`htmlBody` | string
`textBody` | string
`htmlBodyDark` | string
`textBodyDark` | string
`campaignType` | string
`autoDetectSchema` | boolean
`promoAnnotations` | object
`throwawayPolicy` | string
`scheduledAt` | Date
`startedAt` | Date
`completedAt` | Date
`recipientCount` | number
`isAbTest` | boolean
`winningVariantId` | string
`abTestConfig` | object
`errorMessage` | string
`stats` | [CampaignStats](CampaignStats.md)
`openRate` | number
`clickRate` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Campaign } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountId": null,
  "name": null,
  "status": null,
  "domainId": null,
  "subject": null,
  "fromAddress": null,
  "replyTo": null,
  "htmlBody": null,
  "textBody": null,
  "htmlBodyDark": null,
  "textBodyDark": null,
  "campaignType": null,
  "autoDetectSchema": null,
  "promoAnnotations": null,
  "throwawayPolicy": null,
  "scheduledAt": null,
  "startedAt": null,
  "completedAt": null,
  "recipientCount": null,
  "isAbTest": null,
  "winningVariantId": null,
  "abTestConfig": null,
  "errorMessage": null,
  "stats": null,
  "openRate": null,
  "clickRate": null,
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


