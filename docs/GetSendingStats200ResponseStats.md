
# GetSendingStats200ResponseStats


## Properties

Name | Type
------------ | -------------
`period` | string
`sent` | number
`delivered` | number
`bounced` | number
`deferred` | number
`failed` | number
`openedTotal` | number
`openedUnique` | number
`clickedTotal` | number
`clickedUnique` | number
`unsubscribed` | number
`deliveryRate` | number
`openRate` | number
`clickRate` | number
`botOpens` | number
`humanOpens` | number
`botOpenPct` | number

## Example

```typescript
import type { GetSendingStats200ResponseStats } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "period": null,
  "sent": null,
  "delivered": null,
  "bounced": null,
  "deferred": null,
  "failed": null,
  "openedTotal": null,
  "openedUnique": null,
  "clickedTotal": null,
  "clickedUnique": null,
  "unsubscribed": null,
  "deliveryRate": null,
  "openRate": null,
  "clickRate": null,
  "botOpens": null,
  "humanOpens": null,
  "botOpenPct": null,
} satisfies GetSendingStats200ResponseStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSendingStats200ResponseStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


