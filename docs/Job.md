
# Job


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`totalCount` | number
`processedCount` | number
`progressPercent` | number
`summary` | [JobSummary](JobSummary.md)
`createdAt` | Date
`completedAt` | Date
`metadata` | object

## Example

```typescript
import type { Job } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": job_abc123xyz,
  "status": null,
  "totalCount": null,
  "processedCount": null,
  "progressPercent": null,
  "summary": null,
  "createdAt": null,
  "completedAt": null,
  "metadata": null,
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


