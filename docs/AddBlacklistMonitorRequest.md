
# AddBlacklistMonitorRequest


## Properties

Name | Type
------------ | -------------
`target` | string
`targetType` | string

## Example

```typescript
import type { AddBlacklistMonitorRequest } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "target": 192.0.2.1,
  "targetType": null,
} satisfies AddBlacklistMonitorRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddBlacklistMonitorRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


