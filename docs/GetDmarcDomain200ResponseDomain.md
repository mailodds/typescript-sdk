
# GetDmarcDomain200ResponseDomain


## Properties

Name | Type
------------ | -------------
`id` | string
`domain` | string
`reportingAddress` | string
`dnsVerified` | boolean
`dnsVerifiedAt` | Date
`createdAt` | Date
`summary` | [GetDmarcDomain200ResponseDomainAllOfSummary](GetDmarcDomain200ResponseDomainAllOfSummary.md)

## Example

```typescript
import type { GetDmarcDomain200ResponseDomain } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "domain": null,
  "reportingAddress": null,
  "dnsVerified": null,
  "dnsVerifiedAt": null,
  "createdAt": null,
  "summary": null,
} satisfies GetDmarcDomain200ResponseDomain

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDmarcDomain200ResponseDomain
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


