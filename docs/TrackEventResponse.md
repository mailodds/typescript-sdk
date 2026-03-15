
# TrackEventResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`eventId` | number
`created` | boolean
`idempotent` | boolean

## Example

```typescript
import type { TrackEventResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "eventId": null,
  "created": null,
  "idempotent": null,
} satisfies TrackEventResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackEventResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


