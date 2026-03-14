
# BounceAnalysisResponseAnalysisCategories

Bounce category breakdown

## Properties

Name | Type
------------ | -------------
`invalidRecipient` | number
`mailboxFull` | number
`domainIssue` | number
`policyRejection` | number
`contentRejection` | number
`other` | number

## Example

```typescript
import type { BounceAnalysisResponseAnalysisCategories } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "invalidRecipient": null,
  "mailboxFull": null,
  "domainIssue": null,
  "policyRejection": null,
  "contentRejection": null,
  "other": null,
} satisfies BounceAnalysisResponseAnalysisCategories

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BounceAnalysisResponseAnalysisCategories
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


