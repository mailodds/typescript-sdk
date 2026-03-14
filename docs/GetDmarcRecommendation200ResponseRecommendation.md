
# GetDmarcRecommendation200ResponseRecommendation


## Properties

Name | Type
------------ | -------------
`currentPolicy` | string
`recommendedPolicy` | string
`confidence` | number
`reasons` | Array&lt;string&gt;
`readyToUpgrade` | boolean

## Example

```typescript
import type { GetDmarcRecommendation200ResponseRecommendation } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "currentPolicy": null,
  "recommendedPolicy": null,
  "confidence": null,
  "reasons": null,
  "readyToUpgrade": null,
} satisfies GetDmarcRecommendation200ResponseRecommendation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDmarcRecommendation200ResponseRecommendation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


