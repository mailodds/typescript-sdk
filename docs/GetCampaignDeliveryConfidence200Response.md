
# GetCampaignDeliveryConfidence200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`campaignId` | string
`confidenceScore` | number
`factors` | [GetCampaignDeliveryConfidence200ResponseFactors](GetCampaignDeliveryConfidence200ResponseFactors.md)
`recommendations` | Array&lt;string&gt;

## Example

```typescript
import type { GetCampaignDeliveryConfidence200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "campaignId": null,
  "confidenceScore": null,
  "factors": null,
  "recommendations": null,
} satisfies GetCampaignDeliveryConfidence200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignDeliveryConfidence200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


