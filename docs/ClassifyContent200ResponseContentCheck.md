
# ClassifyContent200ResponseContentCheck


## Properties

Name | Type
------------ | -------------
`score` | number
`verdict` | string
`categories` | [Array&lt;ClassifyContent200ResponseContentCheckCategoriesInner&gt;](ClassifyContent200ResponseContentCheckCategoriesInner.md)
`suggestions` | Array&lt;string&gt;

## Example

```typescript
import type { ClassifyContent200ResponseContentCheck } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "score": null,
  "verdict": null,
  "categories": null,
  "suggestions": null,
} satisfies ClassifyContent200ResponseContentCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClassifyContent200ResponseContentCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


