
# GetMessageEvents200ResponseSummary


## Properties

Name | Type
------------ | -------------
`delivered` | boolean
`bounced` | boolean
`humanOpens` | number
`botOpens` | number
`clicks` | number
`unsubscribed` | boolean

## Example

```typescript
import type { GetMessageEvents200ResponseSummary } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "delivered": null,
  "bounced": null,
  "humanOpens": null,
  "botOpens": null,
  "clicks": null,
  "unsubscribed": null,
} satisfies GetMessageEvents200ResponseSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMessageEvents200ResponseSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


