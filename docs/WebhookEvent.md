
# WebhookEvent

Webhook payload delivered to your endpoint. Fields vary by event type.

## Properties

Name | Type
------------ | -------------
`event` | string
`timestamp` | Date
`job` | [Job](Job.md)
`messageId` | string
`accountId` | number
`domainId` | string
`to` | string
`status` | string
`smtpCode` | number
`smtpResponse` | string
`mxHost` | string
`bounceType` | string
`enhancedStatusCode` | string
`attempts` | number
`isp` | string
`isMpp` | boolean
`ipAddress` | string
`userAgent` | string
`isBot` | boolean
`linkUrl` | string
`linkIndex` | number

## Example

```typescript
import type { WebhookEvent } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "event": null,
  "timestamp": null,
  "job": null,
  "messageId": null,
  "accountId": null,
  "domainId": null,
  "to": null,
  "status": null,
  "smtpCode": null,
  "smtpResponse": null,
  "mxHost": null,
  "bounceType": null,
  "enhancedStatusCode": null,
  "attempts": null,
  "isp": null,
  "isMpp": null,
  "ipAddress": null,
  "userAgent": null,
  "isBot": null,
  "linkUrl": null,
  "linkIndex": null,
} satisfies WebhookEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


