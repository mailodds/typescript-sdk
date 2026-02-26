
# SubscriberList


## Properties

Name | Type
------------ | -------------
`id` | string
`accountId` | number
`name` | string
`description` | string
`confirmationRedirectUrl` | string
`confirmationSubject` | string
`confirmationFromName` | string
`subscriberCount` | number
`confirmedCount` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { SubscriberList } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountId": null,
  "name": null,
  "description": null,
  "confirmationRedirectUrl": null,
  "confirmationSubject": null,
  "confirmationFromName": null,
  "subscriberCount": null,
  "confirmedCount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies SubscriberList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriberList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


