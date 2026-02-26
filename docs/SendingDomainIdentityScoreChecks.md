
# SendingDomainIdentityScoreChecks

Individual check results

## Properties

Name | Type
------------ | -------------
`dkim` | [SendingDomainIdentityScoreChecksDkim](SendingDomainIdentityScoreChecksDkim.md)
`spf` | [SendingDomainIdentityScoreChecksDkim](SendingDomainIdentityScoreChecksDkim.md)
`dmarc` | [SendingDomainIdentityScoreChecksDmarc](SendingDomainIdentityScoreChecksDmarc.md)
`mx` | [SendingDomainIdentityScoreChecksDkim](SendingDomainIdentityScoreChecksDkim.md)
`returnPath` | [SendingDomainIdentityScoreChecksDkim](SendingDomainIdentityScoreChecksDkim.md)

## Example

```typescript
import type { SendingDomainIdentityScoreChecks } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "dkim": null,
  "spf": null,
  "dmarc": null,
  "mx": null,
  "returnPath": null,
} satisfies SendingDomainIdentityScoreChecks

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendingDomainIdentityScoreChecks
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


