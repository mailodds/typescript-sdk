
# CrossReferenceBounces200ResponseCrossReference


## Properties

Name | Type
------------ | -------------
`totalBounced` | number
`matched` | number
`unmatched` | number
`matchRate` | number
`entries` | [Array&lt;CrossReferenceBounces200ResponseCrossReferenceEntriesInner&gt;](CrossReferenceBounces200ResponseCrossReferenceEntriesInner.md)

## Example

```typescript
import type { CrossReferenceBounces200ResponseCrossReference } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalBounced": null,
  "matched": null,
  "unmatched": null,
  "matchRate": null,
  "entries": null,
} satisfies CrossReferenceBounces200ResponseCrossReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrossReferenceBounces200ResponseCrossReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


