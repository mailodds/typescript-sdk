
# TelemetrySummary

Validation metrics for building dashboards and monitoring.

## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`window` | string
`generatedAt` | Date
`timezone` | string
`totals` | [TelemetrySummaryTotals](TelemetrySummaryTotals.md)
`rates` | [TelemetrySummaryRates](TelemetrySummaryRates.md)
`topReasons` | [Array&lt;TelemetrySummaryTopReasonsInner&gt;](TelemetrySummaryTopReasonsInner.md)
`topDomains` | [Array&lt;TelemetrySummaryTopDomainsInner&gt;](TelemetrySummaryTopDomainsInner.md)

## Example

```typescript
import type { TelemetrySummary } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": 1.0,
  "window": null,
  "generatedAt": null,
  "timezone": UTC,
  "totals": null,
  "rates": null,
  "topReasons": null,
  "topDomains": null,
} satisfies TelemetrySummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TelemetrySummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


