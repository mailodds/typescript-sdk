
# GetDmarcDomain200ResponseDomainAllOfSummary


## Properties

Name | Type
------------ | -------------
`days` | number
`reportCount` | number
`sourceCount` | number
`totalMessages` | number
`totalPass` | number
`totalFail` | number
`passRate` | number

## Example

```typescript
import type { GetDmarcDomain200ResponseDomainAllOfSummary } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "days": null,
  "reportCount": null,
  "sourceCount": null,
  "totalMessages": null,
  "totalPass": null,
  "totalFail": null,
  "passRate": null,
} satisfies GetDmarcDomain200ResponseDomainAllOfSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDmarcDomain200ResponseDomainAllOfSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


