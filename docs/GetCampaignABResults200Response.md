
# GetCampaignABResults200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`campaignId` | string
`variants` | [Array&lt;GetCampaignABResults200ResponseVariantsInner&gt;](GetCampaignABResults200ResponseVariantsInner.md)
`winner` | [GetCampaignABResults200ResponseWinner](GetCampaignABResults200ResponseWinner.md)

## Example

```typescript
import type { GetCampaignABResults200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "campaignId": null,
  "variants": null,
  "winner": null,
} satisfies GetCampaignABResults200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignABResults200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


