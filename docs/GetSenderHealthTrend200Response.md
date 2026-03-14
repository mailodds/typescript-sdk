
# GetSenderHealthTrend200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`period` | string
`dataPoints` | [Array&lt;GetSenderHealthTrend200ResponseDataPointsInner&gt;](GetSenderHealthTrend200ResponseDataPointsInner.md)

## Example

```typescript
import type { GetSenderHealthTrend200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "period": null,
  "dataPoints": null,
} satisfies GetSenderHealthTrend200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSenderHealthTrend200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


