
# GetInactiveContactsReport200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`inactiveCount` | number
`totalContacts` | number
`inactiveRate` | number
`byList` | [Array&lt;GetInactiveContactsReport200ResponseByListInner&gt;](GetInactiveContactsReport200ResponseByListInner.md)

## Example

```typescript
import type { GetInactiveContactsReport200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "inactiveCount": null,
  "totalContacts": null,
  "inactiveRate": null,
  "byList": null,
} satisfies GetInactiveContactsReport200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetInactiveContactsReport200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


