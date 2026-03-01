
# ValidationResultSuppression

Present only when email matched a suppression entry.

## Properties

Name | Type
------------ | -------------
`matchType` | string
`matchValue` | string

## Example

```typescript
import type { ValidationResultSuppression } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "matchType": null,
  "matchValue": null,
} satisfies ValidationResultSuppression

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationResultSuppression
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


