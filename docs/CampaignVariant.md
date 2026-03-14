
# CampaignVariant


## Properties

Name | Type
------------ | -------------
`id` | string
`campaignId` | string
`name` | string
`subject` | string
`html` | string
`text` | string
`weight` | number
`createdAt` | Date

## Example

```typescript
import type { CampaignVariant } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "campaignId": null,
  "name": null,
  "subject": null,
  "html": null,
  "text": null,
  "weight": null,
  "createdAt": null,
} satisfies CampaignVariant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignVariant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


