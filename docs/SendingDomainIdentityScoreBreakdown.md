
# SendingDomainIdentityScoreBreakdown

Per-check scoring breakdown

## Properties

Name | Type
------------ | -------------
`spf` | [IdentityScoreCheck](IdentityScoreCheck.md)
`dkim` | [IdentityScoreCheck](IdentityScoreCheck.md)
`dmarc` | [IdentityScoreCheck](IdentityScoreCheck.md)
`bounce` | [IdentityScoreCheck](IdentityScoreCheck.md)
`tracking` | [IdentityScoreCheck](IdentityScoreCheck.md)
`bimi` | [IdentityScoreCheck](IdentityScoreCheck.md)

## Example

```typescript
import type { SendingDomainIdentityScoreBreakdown } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "spf": null,
  "dkim": null,
  "dmarc": null,
  "bounce": null,
  "tracking": null,
  "bimi": null,
} satisfies SendingDomainIdentityScoreBreakdown

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendingDomainIdentityScoreBreakdown
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


