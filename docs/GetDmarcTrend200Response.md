
# GetDmarcTrend200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`trend` | [Array&lt;GetDmarcTrend200ResponseTrendInner&gt;](GetDmarcTrend200ResponseTrendInner.md)

## Example

```typescript
import type { GetDmarcTrend200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "trend": null,
} satisfies GetDmarcTrend200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDmarcTrend200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


