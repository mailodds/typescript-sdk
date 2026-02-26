
# Subscriber


## Properties

Name | Type
------------ | -------------
`id` | string
`listId` | string
`email` | string
`name` | string
`status` | string
`consentSourceIp` | string
`consentPageUrl` | string
`consentFormId` | string
`consentTimestamp` | Date
`confirmedAt` | Date
`unsubscribedAt` | Date
`validationResult` | object
`metadata` | object
`createdAt` | Date

## Example

```typescript
import type { Subscriber } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "listId": null,
  "email": null,
  "name": null,
  "status": null,
  "consentSourceIp": null,
  "consentPageUrl": null,
  "consentFormId": null,
  "consentTimestamp": null,
  "confirmedAt": null,
  "unsubscribedAt": null,
  "validationResult": null,
  "metadata": null,
  "createdAt": null,
} satisfies Subscriber

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Subscriber
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


