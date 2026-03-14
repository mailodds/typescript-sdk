
# GetCampaignABResults200ResponseVariantsInner


## Properties

Name | Type
------------ | -------------
`variantId` | string
`name` | string
`subject` | string
`weight` | number
`sent` | number
`delivered` | number
`opened` | number
`clicked` | number
`bounced` | number
`openRate` | number
`clickRate` | number

## Example

```typescript
import type { GetCampaignABResults200ResponseVariantsInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "variantId": null,
  "name": null,
  "subject": null,
  "weight": null,
  "sent": null,
  "delivered": null,
  "opened": null,
  "clicked": null,
  "bounced": null,
  "openRate": null,
  "clickRate": null,
} satisfies GetCampaignABResults200ResponseVariantsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignABResults200ResponseVariantsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


