
# Policy


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`description` | string
`isDefault` | boolean
`isEnabled` | boolean
`priority` | number
`ruleCount` | number
`rules` | [Array&lt;PolicyRule&gt;](PolicyRule.md)
`createdAt` | Date

## Example

```typescript
import type { Policy } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "isDefault": null,
  "isEnabled": null,
  "priority": null,
  "ruleCount": null,
  "rules": null,
  "createdAt": null,
} satisfies Policy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Policy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


