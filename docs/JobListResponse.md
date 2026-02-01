
# JobListResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`jobs` | [Array&lt;Job&gt;](Job.md)
`pagination` | [Pagination](Pagination.md)

## Example

```typescript
import type { JobListResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "jobs": null,
  "pagination": null,
} satisfies JobListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


