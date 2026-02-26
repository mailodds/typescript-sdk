
# SubscribeRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`name` | string
`metadata` | object
`pageUrl` | string
`formId` | string

## Example

```typescript
import type { SubscribeRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "name": null,
  "metadata": null,
  "pageUrl": null,
  "formId": null,
} satisfies SubscribeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscribeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


