
# IdentityScoreCheck


## Properties

Name | Type
------------ | -------------
`status` | string
`points` | number
`maxPoints` | number
`verifiedAt` | Date

## Example

```typescript
import type { IdentityScoreCheck } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "points": null,
  "maxPoints": null,
  "verifiedAt": null,
} satisfies IdentityScoreCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IdentityScoreCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


