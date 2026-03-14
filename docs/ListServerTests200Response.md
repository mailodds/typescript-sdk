
# ListServerTests200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`tests` | [Array&lt;ServerTest&gt;](ServerTest.md)
`pagination` | [Pagination](Pagination.md)

## Example

```typescript
import type { ListServerTests200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "tests": null,
  "pagination": null,
} satisfies ListServerTests200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListServerTests200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


