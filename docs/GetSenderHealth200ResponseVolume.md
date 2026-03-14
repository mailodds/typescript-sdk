
# GetSenderHealth200ResponseVolume


## Properties

Name | Type
------------ | -------------
`sent` | number
`delivered` | number
`bounced` | number
`complained` | number

## Example

```typescript
import type { GetSenderHealth200ResponseVolume } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "sent": null,
  "delivered": null,
  "bounced": null,
  "complained": null,
} satisfies GetSenderHealth200ResponseVolume

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSenderHealth200ResponseVolume
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


