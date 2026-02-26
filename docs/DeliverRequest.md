
# DeliverRequest


## Properties

Name | Type
------------ | -------------
`to` | [Array&lt;DeliverRequestToInner&gt;](DeliverRequestToInner.md)
`from` | string
`subject` | string
`html` | string
`text` | string
`domainId` | string
`replyTo` | string
`headers` | object
`tags` | Array&lt;string&gt;
`campaignType` | string
`structuredData` | [DeliverRequestStructuredData](DeliverRequestStructuredData.md)
`options` | [DeliverRequestOptions](DeliverRequestOptions.md)

## Example

```typescript
import type { DeliverRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "to": null,
  "from": null,
  "subject": null,
  "html": null,
  "text": null,
  "domainId": null,
  "replyTo": null,
  "headers": null,
  "tags": null,
  "campaignType": null,
  "structuredData": null,
  "options": null,
} satisfies DeliverRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeliverRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


