
# Job


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`status` | string
`totalCount` | number
`processedCount` | number
`summary` | [JobSummary](JobSummary.md)
`createdAt` | Date
`startedAt` | Date
`completedAt` | Date
`resultsExpireAt` | Date
`metadata` | object
`errorMessage` | string
`requestId` | string
`artifacts` | [JobArtifacts](JobArtifacts.md)

## Example

```typescript
import type { Job } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": job_abc123xyz,
  "name": null,
  "status": null,
  "totalCount": null,
  "processedCount": null,
  "summary": null,
  "createdAt": null,
  "startedAt": null,
  "completedAt": null,
  "resultsExpireAt": null,
  "metadata": null,
  "errorMessage": null,
  "requestId": null,
  "artifacts": null,
} satisfies Job

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Job
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


