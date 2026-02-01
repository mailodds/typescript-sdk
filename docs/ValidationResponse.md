
# ValidationResponse


## Properties

Name | Type
------------ | -------------
`schemaVersion` | string
`email` | string
`status` | string
`subStatus` | string
`action` | string
`domain` | string
`mxFound` | boolean
`smtpCheck` | boolean
`disposable` | boolean
`roleAccount` | boolean
`freeProvider` | boolean
`suppressionMatch` | [ValidationResponseSuppressionMatch](ValidationResponseSuppressionMatch.md)

## Example

```typescript
import type { ValidationResponse } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "schemaVersion": 1.0,
  "email": null,
  "status": null,
  "subStatus": null,
  "action": null,
  "domain": null,
  "mxFound": null,
  "smtpCheck": null,
  "disposable": null,
  "roleAccount": null,
  "freeProvider": null,
  "suppressionMatch": null,
} satisfies ValidationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


