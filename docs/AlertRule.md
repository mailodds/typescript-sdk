
# AlertRule


## Properties

Name | Type
------------ | -------------
`id` | string
`metric` | string
`threshold` | number
`channel` | string
`windowMinutes` | number
`enabled` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AlertRule } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "metric": null,
  "threshold": null,
  "channel": null,
  "windowMinutes": null,
  "enabled": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AlertRule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertRule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


