
# BatchDeliverResponseRejectedInner


## Properties

Name | Type
------------ | -------------
`email` | string
`reason` | string
`status` | string
`subStatus` | string

## Example

```typescript
import type { BatchDeliverResponseRejectedInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "reason": null,
  "status": null,
  "subStatus": null,
} satisfies BatchDeliverResponseRejectedInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchDeliverResponseRejectedInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


