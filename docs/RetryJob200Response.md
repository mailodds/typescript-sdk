
# RetryJob200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`job` | object
`pendingCount` | number

## Example

```typescript
import type { RetryJob200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "job": null,
  "pendingCount": null,
} satisfies RetryJob200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetryJob200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


