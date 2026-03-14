
# GetBounceRecords200ResponseRecordsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`email` | string
`bounceType` | string
`smtpCode` | number
`enhancedStatus` | string
`diagnostic` | string
`mxHost` | string
`bouncedAt` | Date

## Example

```typescript
import type { GetBounceRecords200ResponseRecordsInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "bounceType": null,
  "smtpCode": null,
  "enhancedStatus": null,
  "diagnostic": null,
  "mxHost": null,
  "bouncedAt": null,
} satisfies GetBounceRecords200ResponseRecordsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBounceRecords200ResponseRecordsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


