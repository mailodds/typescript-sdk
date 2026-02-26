
# SendingDomainDnsRecordsNs


## Properties

Name | Type
------------ | -------------
`type` | string
`host` | string
`targets` | Array&lt;string&gt;
`status` | string
`verifiedAt` | Date

## Example

```typescript
import type { SendingDomainDnsRecordsNs } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "host": null,
  "targets": null,
  "status": null,
  "verifiedAt": null,
} satisfies SendingDomainDnsRecordsNs

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendingDomainDnsRecordsNs
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


