
# GetCampaignProviderIntelligence200ResponseProvidersInner


## Properties

Name | Type
------------ | -------------
`provider` | string
`sent` | number
`delivered` | number
`bounced` | number
`opened` | number
`clicked` | number
`deliveryRate` | number
`openRate` | number
`clickRate` | number

## Example

```typescript
import type { GetCampaignProviderIntelligence200ResponseProvidersInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "sent": null,
  "delivered": null,
  "bounced": null,
  "opened": null,
  "clicked": null,
  "deliveryRate": null,
  "openRate": null,
  "clickRate": null,
} satisfies GetCampaignProviderIntelligence200ResponseProvidersInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignProviderIntelligence200ResponseProvidersInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


