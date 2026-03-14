
# GetCampaignDeliveryConfidence200ResponseFactors


## Properties

Name | Type
------------ | -------------
`listQuality` | [GetCampaignDeliveryConfidence200ResponseFactorsListQuality](GetCampaignDeliveryConfidence200ResponseFactorsListQuality.md)
`senderReputation` | [GetCampaignDeliveryConfidence200ResponseFactorsSenderReputation](GetCampaignDeliveryConfidence200ResponseFactorsSenderReputation.md)
`domainAuth` | [GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth](GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth.md)

## Example

```typescript
import type { GetCampaignDeliveryConfidence200ResponseFactors } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "listQuality": null,
  "senderReputation": null,
  "domainAuth": null,
} satisfies GetCampaignDeliveryConfidence200ResponseFactors

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignDeliveryConfidence200ResponseFactors
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


