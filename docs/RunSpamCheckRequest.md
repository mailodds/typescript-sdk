
# RunSpamCheckRequest


## Properties

Name | Type
------------ | -------------
`fromDomain` | string
`links` | Array&lt;string&gt;
`subjectPreview` | string
`clientScores` | object

## Example

```typescript
import type { RunSpamCheckRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "fromDomain": null,
  "links": null,
  "subjectPreview": null,
  "clientScores": null,
} satisfies RunSpamCheckRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RunSpamCheckRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


