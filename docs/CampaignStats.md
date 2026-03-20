
# CampaignStats

Delivery and engagement statistics.

## Properties

Name | Type
------------ | -------------
`sent` | number
`delivered` | number
`opened` | number
`clicked` | number
`bounced` | number
`unsubscribed` | number
`suppressed` | number
`failed` | number
`conversions` | number

## Example

```typescript
import type { CampaignStats } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "sent": null,
  "delivered": null,
  "opened": null,
  "clicked": null,
  "bounced": null,
  "unsubscribed": null,
  "suppressed": null,
  "failed": null,
  "conversions": null,
} satisfies CampaignStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


