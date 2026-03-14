
# ServerTest


## Properties

Name | Type
------------ | -------------
`id` | string
`domain` | string
`status` | string
`mxRecords` | [Array&lt;ServerTestMxRecordsInner&gt;](ServerTestMxRecordsInner.md)
`smtpCheck` | [ServerTestSmtpCheck](ServerTestSmtpCheck.md)
`dnsChecks` | [ServerTestDnsChecks](ServerTestDnsChecks.md)
`score` | number
`recommendations` | Array&lt;string&gt;
`createdAt` | Date

## Example

```typescript
import type { ServerTest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "domain": null,
  "status": null,
  "mxRecords": null,
  "smtpCheck": null,
  "dnsChecks": null,
  "score": null,
  "recommendations": null,
  "createdAt": null,
} satisfies ServerTest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServerTest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


