
# SendingDomain


## Properties

Name | Type
------------ | -------------
`id` | string
`domain` | string
`domainType` | string
`status` | string
`dkimSelector` | string
`dnsRecords` | [SendingDomainDnsRecords](SendingDomainDnsRecords.md)
`bimiSvgUrl` | string
`bimiVmcUrl` | string
`bimiEnabled` | boolean
`forwardRepliesTo` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { SendingDomain } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "domain": null,
  "domainType": null,
  "status": null,
  "dkimSelector": null,
  "dnsRecords": null,
  "bimiSvgUrl": null,
  "bimiVmcUrl": null,
  "bimiEnabled": null,
  "forwardRepliesTo": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies SendingDomain

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendingDomain
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


