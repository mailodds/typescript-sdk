
# GetCampaignFunnel200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`campaignId` | string
`funnel` | [GetCampaignFunnel200ResponseFunnel](GetCampaignFunnel200ResponseFunnel.md)
`rates` | [GetCampaignFunnel200ResponseRates](GetCampaignFunnel200ResponseRates.md)

## Example

```typescript
import type { GetCampaignFunnel200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "campaignId": null,
  "funnel": null,
  "rates": null,
} satisfies GetCampaignFunnel200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignFunnel200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


