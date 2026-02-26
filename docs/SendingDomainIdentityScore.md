
# SendingDomainIdentityScore


## Properties

Name | Type
------------ | -------------
`overallScore` | number
`checks` | [SendingDomainIdentityScoreChecks](SendingDomainIdentityScoreChecks.md)

## Example

```typescript
import type { SendingDomainIdentityScore } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "overallScore": null,
  "checks": null,
} satisfies SendingDomainIdentityScore

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendingDomainIdentityScore
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


