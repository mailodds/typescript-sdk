
# PolicyListResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`policies` | [Array&lt;Policy&gt;](Policy.md)
`limits` | [PolicyListResponseLimits](PolicyListResponseLimits.md)

## Example

```typescript
import type { PolicyListResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "policies": null,
  "limits": null,
} satisfies PolicyListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


