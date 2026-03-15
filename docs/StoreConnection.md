
# StoreConnection


## Properties

Name | Type
------------ | -------------
`id` | string
`accountId` | number
`platform` | string
`storeName` | string
`storeUrl` | string
`status` | string
`authMethod` | string
`productCount` | number
`lastSyncedAt` | Date
`lastError` | string
`syncIntervalSeconds` | number
`settings` | object
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { StoreConnection } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountId": null,
  "platform": null,
  "storeName": null,
  "storeUrl": null,
  "status": null,
  "authMethod": null,
  "productCount": null,
  "lastSyncedAt": null,
  "lastError": null,
  "syncIntervalSeconds": null,
  "settings": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies StoreConnection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoreConnection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


