
# PolicyPresetsResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`requestId` | string
`presets` | [Array&lt;PolicyPresetsResponsePresetsInner&gt;](PolicyPresetsResponsePresetsInner.md)

## Example

```typescript
import type { PolicyPresetsResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": null,
  "requestId": null,
  "presets": null,
} satisfies PolicyPresetsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyPresetsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


