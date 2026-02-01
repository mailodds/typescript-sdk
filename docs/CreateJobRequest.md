
# CreateJobRequest

Bulk jobs use the account\'s default validation policy. To use a specific policy, set it as default via the Policies API.

## Properties

Name | Type
------------ | -------------
`emails` | Array&lt;string&gt;
`dedup` | boolean
`metadata` | object
`webhookUrl` | string
`idempotencyKey` | string

## Example

```typescript
import type { CreateJobRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "emails": null,
  "dedup": null,
  "metadata": null,
  "webhookUrl": null,
  "idempotencyKey": null,
} satisfies CreateJobRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateJobRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


