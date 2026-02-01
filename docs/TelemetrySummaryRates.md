
# TelemetrySummaryRates

Status distribution as decimals (0-1)

## Properties

Name | Type
------------ | -------------
`deliverable` | number
`reject` | number
`unknown` | number
`suppressed` | number

## Example

```typescript
import type { TelemetrySummaryRates } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "deliverable": null,
  "reject": null,
  "unknown": null,
  "suppressed": null,
} satisfies TelemetrySummaryRates

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TelemetrySummaryRates
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


