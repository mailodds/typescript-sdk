
# JwksResponseKeysInner


## Properties

Name | Type
------------ | -------------
`kty` | string
`use` | string
`kid` | string
`alg` | string
`n` | string
`e` | string

## Example

```typescript
import type { JwksResponseKeysInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "kty": null,
  "use": null,
  "kid": null,
  "alg": null,
  "n": null,
  "e": null,
} satisfies JwksResponseKeysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JwksResponseKeysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


