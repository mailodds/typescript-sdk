
# GetSenderHealth200ResponseComponents


## Properties

Name | Type
------------ | -------------
`deliveryRate` | [GetSenderHealth200ResponseComponentsDeliveryRate](GetSenderHealth200ResponseComponentsDeliveryRate.md)
`bounceRate` | [GetSenderHealth200ResponseComponentsDeliveryRate](GetSenderHealth200ResponseComponentsDeliveryRate.md)
`complaintRate` | [GetSenderHealth200ResponseComponentsDeliveryRate](GetSenderHealth200ResponseComponentsDeliveryRate.md)
`authentication` | [GetSenderHealth200ResponseComponentsDeliveryRate](GetSenderHealth200ResponseComponentsDeliveryRate.md)

## Example

```typescript
import type { GetSenderHealth200ResponseComponents } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "deliveryRate": null,
  "bounceRate": null,
  "complaintRate": null,
  "authentication": null,
} satisfies GetSenderHealth200ResponseComponents

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSenderHealth200ResponseComponents
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


