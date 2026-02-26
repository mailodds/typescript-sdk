
# BatchDeliverRequest

Same fields as DeliverRequest but \'to\' accepts up to 100 recipients.

## Properties

Name | Type
------------ | -------------
`to` | Array&lt;string&gt;
`from` | string
`subject` | string
`html` | string
`text` | string
`domainId` | string
`replyTo` | string
`headers` | object
`tags` | Array&lt;string&gt;
`campaignType` | string
`structuredData` | [BatchDeliverRequestStructuredData](BatchDeliverRequestStructuredData.md)
`options` | object

## Example

```typescript
import type { BatchDeliverRequest } from '@mailodds/sdk'

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
} satisfies BatchDeliverRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchDeliverRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


