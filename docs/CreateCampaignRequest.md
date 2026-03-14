
# CreateCampaignRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`listId` | string
`domainId` | string
`fromEmail` | string
`fromName` | string
`replyTo` | string
`tags` | Array&lt;string&gt;

## Example

```typescript
import type { CreateCampaignRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "listId": null,
  "domainId": null,
  "fromEmail": null,
  "fromName": null,
  "replyTo": null,
  "tags": null,
} satisfies CreateCampaignRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCampaignRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


