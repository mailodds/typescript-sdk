
# GetComplaintAssessment200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`complaintRate` | number
`riskLevel` | string
`totalComplaints` | number
`totalSent` | number

## Example

```typescript
import type { GetComplaintAssessment200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "complaintRate": null,
  "riskLevel": null,
  "totalComplaints": null,
  "totalSent": null,
} satisfies GetComplaintAssessment200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetComplaintAssessment200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


