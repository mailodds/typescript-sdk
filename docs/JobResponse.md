
# JobResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`job` | [Job](Job.md)

## Example

```typescript
import type { JobResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": 1.0,
  "requestId": null,
  "job": null,
} satisfies JobResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


