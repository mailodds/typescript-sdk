
# JobArtifacts

Download URLs for completed jobs. Present only when status is completed.

## Properties

Name | Type
------------ | -------------
`csvAll` | string
`csvValid` | string
`csvInvalid` | string

## Example

```typescript
import type { JobArtifacts } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "csvAll": null,
  "csvValid": null,
  "csvInvalid": null,
} satisfies JobArtifacts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobArtifacts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


