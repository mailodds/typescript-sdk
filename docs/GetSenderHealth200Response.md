
# GetSenderHealth200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`score` | number
`grade` | string
`period` | string
`components` | [GetSenderHealth200ResponseComponents](GetSenderHealth200ResponseComponents.md)
`volume` | [GetSenderHealth200ResponseVolume](GetSenderHealth200ResponseVolume.md)

## Example

```typescript
import type { GetSenderHealth200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "score": null,
  "grade": null,
  "period": null,
  "components": null,
  "volume": null,
} satisfies GetSenderHealth200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSenderHealth200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


