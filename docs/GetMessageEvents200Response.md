
# GetMessageEvents200Response


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`messageId` | string
`recipient` | string
`summary` | [GetMessageEvents200ResponseSummary](GetMessageEvents200ResponseSummary.md)
`clicks` | [Array&lt;GetMessageEvents200ResponseClicksInner&gt;](GetMessageEvents200ResponseClicksInner.md)
`events` | [Array&lt;GetMessageEvents200ResponseEventsInner&gt;](GetMessageEvents200ResponseEventsInner.md)
`total` | number

## Example

```typescript
import type { GetMessageEvents200Response } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "messageId": null,
  "recipient": null,
  "summary": null,
  "clicks": null,
  "events": null,
  "total": null,
} satisfies GetMessageEvents200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMessageEvents200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


