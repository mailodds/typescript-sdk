
# ValidationResponseSuppressionMatch

Present only when email matched a suppression list entry. Null otherwise.

## Properties

Name | Type
------------ | -------------
`matchType` | string
`matchValue` | string
`reason` | string

## Example

```typescript
import type { ValidationResponseSuppressionMatch } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "matchType": null,
  "matchValue": null,
  "reason": null,
} satisfies ValidationResponseSuppressionMatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationResponseSuppressionMatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


