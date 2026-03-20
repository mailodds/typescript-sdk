
# GetBounceStats200ResponseStats

Bounce statistics with time-series data

## Properties

Name | Type
------------ | -------------
`period` | string
`groupBy` | string
`data` | Array&lt;object&gt;

## Example

```typescript
import type { GetBounceStats200ResponseStats } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "period": null,
  "groupBy": null,
  "data": null,
} satisfies GetBounceStats200ResponseStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBounceStats200ResponseStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


