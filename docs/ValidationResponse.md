
# ValidationResponse

Flat validation response. Conditional fields are omitted (not null) when not applicable.

## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`email` | string
`status` | string
`action` | string
`subStatus` | string
`domain` | string
`mxFound` | boolean
`mxHost` | string
`smtpCheck` | boolean
`catchAll` | boolean
`disposable` | boolean
`roleAccount` | boolean
`freeProvider` | boolean
`depth` | string
`processedAt` | Date
`suggestedEmail` | string
`retryAfterMs` | number
`hasSpf` | boolean
`hasDmarc` | boolean
`dmarcPolicy` | string
`dnsblListed` | boolean
`suppressionMatch` | [ValidationResponseSuppressionMatch](ValidationResponseSuppressionMatch.md)
`policyApplied` | [ValidationResponsePolicyApplied](ValidationResponsePolicyApplied.md)

## Example

```typescript
import type { ValidationResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": 1.0,
  "requestId": null,
  "email": null,
  "status": null,
  "action": null,
  "subStatus": null,
  "domain": null,
  "mxFound": null,
  "mxHost": null,
  "smtpCheck": null,
  "catchAll": null,
  "disposable": null,
  "roleAccount": null,
  "freeProvider": null,
  "depth": null,
  "processedAt": null,
  "suggestedEmail": null,
  "retryAfterMs": null,
  "hasSpf": null,
  "hasDmarc": null,
  "dmarcPolicy": null,
  "dnsblListed": null,
  "suppressionMatch": null,
  "policyApplied": null,
} satisfies ValidationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


