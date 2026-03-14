
# ClassifyContent200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`contentCheck` | [ClassifyContent200ResponseContentCheck](ClassifyContent200ResponseContentCheck.md)

## Example

```typescript
import type { ClassifyContent200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "contentCheck": null,
} satisfies ClassifyContent200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClassifyContent200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


