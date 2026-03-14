
# AppendToContactListRequest


## Properties

Name | Type
------------ | -------------
`sourceJobIds` | Array&lt;string&gt;
`includeCatchAll` | boolean

## Example

```typescript
import type { AppendToContactListRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "sourceJobIds": null,
  "includeCatchAll": null,
} satisfies AppendToContactListRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AppendToContactListRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


