
# CampaignResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`campaign` | [Campaign](Campaign.md)
`variants` | [Array&lt;CampaignVariant&gt;](CampaignVariant.md)

## Example

```typescript
import type { CampaignResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "campaign": null,
  "variants": null,
} satisfies CampaignResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


