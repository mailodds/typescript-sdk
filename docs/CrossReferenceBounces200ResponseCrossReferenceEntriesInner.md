
# CrossReferenceBounces200ResponseCrossReferenceEntriesInner


## Properties

Name | Type
------------ | -------------
`email` | string
`bounceType` | string
`bouncedAt` | Date
`validationStatus` | string
`validatedAt` | Date

## Example

```typescript
import type { CrossReferenceBounces200ResponseCrossReferenceEntriesInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "bounceType": null,
  "bouncedAt": null,
  "validationStatus": null,
  "validatedAt": null,
} satisfies CrossReferenceBounces200ResponseCrossReferenceEntriesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrossReferenceBounces200ResponseCrossReferenceEntriesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


