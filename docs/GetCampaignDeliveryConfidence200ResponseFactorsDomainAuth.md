
# GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth


## Properties

Name | Type
------------ | -------------
`score` | number
`dkim` | boolean
`spf` | boolean
`dmarc` | boolean

## Example

```typescript
import type { GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "score": null,
  "dkim": null,
  "spf": null,
  "dmarc": null,
} satisfies GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignDeliveryConfidence200ResponseFactorsDomainAuth
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


