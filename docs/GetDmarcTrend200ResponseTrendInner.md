
# GetDmarcTrend200ResponseTrendInner


## Properties

Name | Type
------------ | -------------
`date` | Date
`pass` | number
`fail` | number
`total` | number
`passRate` | number

## Example

```typescript
import type { GetDmarcTrend200ResponseTrendInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "pass": null,
  "fail": null,
  "total": null,
  "passRate": null,
} satisfies GetDmarcTrend200ResponseTrendInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDmarcTrend200ResponseTrendInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


