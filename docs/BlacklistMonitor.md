
# BlacklistMonitor


## Properties

Name | Type
------------ | -------------
`id` | string
`target` | string
`targetType` | string
`status` | string
`listedCount` | number
`lastCheckedAt` | Date
`latestCheck` | [BlacklistMonitorLatestCheck](BlacklistMonitorLatestCheck.md)
`createdAt` | Date

## Example

```typescript
import type { BlacklistMonitor } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "target": null,
  "targetType": null,
  "status": null,
  "listedCount": null,
  "lastCheckedAt": null,
  "latestCheck": null,
  "createdAt": null,
} satisfies BlacklistMonitor

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlacklistMonitor
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


