
# SendingDomainIdentityScore


## Properties

Name | Type
------------ | -------------
`score` | number
`maxScore` | number
`percentage` | number
`breakdown` | [SendingDomainIdentityScoreBreakdown](SendingDomainIdentityScoreBreakdown.md)
`grade` | string

## Example

```typescript
import type { SendingDomainIdentityScore } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "score": null,
  "maxScore": null,
  "percentage": null,
  "breakdown": null,
  "grade": null,
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


