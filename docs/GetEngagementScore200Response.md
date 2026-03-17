
# GetEngagementScore200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`email` | string
`score` | number
`lastEngagedAt` | Date

## Example

```typescript
import type { GetEngagementScore200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "email": null,
  "score": null,
  "lastEngagedAt": null,
} satisfies GetEngagementScore200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEngagementScore200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


