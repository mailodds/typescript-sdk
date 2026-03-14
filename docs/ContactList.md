
# ContactList


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`emailCount` | number
`tags` | Array&lt;string&gt;
`sourceJobIds` | Array&lt;string&gt;
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ContactList } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "emailCount": null,
  "tags": null,
  "sourceJobIds": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ContactList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


