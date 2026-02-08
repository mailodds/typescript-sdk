
# ValidateBatch200ResponseSummary


## Properties

Name | Type
------------ | -------------
`valid` | number
`invalid` | number
`catchAll` | number
`unknown` | number
`doNotMail` | number

## Example

```typescript
import type { ValidateBatch200ResponseSummary } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "valid": null,
  "invalid": null,
  "catchAll": null,
  "unknown": null,
  "doNotMail": null,
} satisfies ValidateBatch200ResponseSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateBatch200ResponseSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


