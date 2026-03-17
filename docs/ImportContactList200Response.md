
# ImportContactList200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`imported` | number
`skipped` | number
`duplicates` | number
`errors` | number
`total` | number
`contactList` | object

## Example

```typescript
import type { ImportContactList200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "imported": null,
  "skipped": null,
  "duplicates": null,
  "errors": null,
  "total": null,
  "contactList": null,
} satisfies ImportContactList200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImportContactList200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


