
# SpamCheck


## Properties

Name | Type
------------ | -------------
`id` | string
`fromDomain` | string
`score` | number
`verdict` | string
`checks` | [SpamCheckChecks](SpamCheckChecks.md)
`createdAt` | Date

## Example

```typescript
import type { SpamCheck } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "fromDomain": null,
  "score": null,
  "verdict": null,
  "checks": null,
  "createdAt": null,
} satisfies SpamCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpamCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


