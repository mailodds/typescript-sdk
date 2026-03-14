
# BounceAnalysisResponseAnalysis


## Properties

Name | Type
------------ | -------------
`id` | string
`domainId` | string
`period` | string
`status` | string
`totalBounces` | number
`hardBounces` | number
`softBounces` | number
`categories` | [BounceAnalysisResponseAnalysisCategories](BounceAnalysisResponseAnalysisCategories.md)
`topDomains` | [Array&lt;BounceAnalysisResponseAnalysisTopDomainsInner&gt;](BounceAnalysisResponseAnalysisTopDomainsInner.md)
`recommendations` | Array&lt;string&gt;
`createdAt` | Date

## Example

```typescript
import type { BounceAnalysisResponseAnalysis } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "domainId": null,
  "period": null,
  "status": null,
  "totalBounces": null,
  "hardBounces": null,
  "softBounces": null,
  "categories": null,
  "topDomains": null,
  "recommendations": null,
  "createdAt": null,
} satisfies BounceAnalysisResponseAnalysis

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BounceAnalysisResponseAnalysis
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


