
# TelemetrySummaryTopDomainsInner


## Properties

Name | Type
------------ | -------------
`domain` | string
`volume` | number
`deliverable` | number
`reject` | number
`unknown` | number
`catchAll` | number

## Example

```typescript
import type { TelemetrySummaryTopDomainsInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "domain": null,
  "volume": null,
  "deliverable": null,
  "reject": null,
  "unknown": null,
  "catchAll": null,
} satisfies TelemetrySummaryTopDomainsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TelemetrySummaryTopDomainsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


