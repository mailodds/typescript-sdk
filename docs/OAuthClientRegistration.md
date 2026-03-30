
# OAuthClientRegistration


## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientName` | string
`redirectUris` | Array&lt;string&gt;
`grantTypes` | Array&lt;string&gt;
`responseTypes` | Array&lt;string&gt;
`tokenEndpointAuthMethod` | string
`scope` | string
`clientIdIssuedAt` | number
`clientSecret` | string
`clientSecretExpiresAt` | number

## Example

```typescript
import type { OAuthClientRegistration } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "clientId": null,
  "clientName": null,
  "redirectUris": null,
  "grantTypes": null,
  "responseTypes": null,
  "tokenEndpointAuthMethod": null,
  "scope": null,
  "clientIdIssuedAt": null,
  "clientSecret": null,
  "clientSecretExpiresAt": null,
} satisfies OAuthClientRegistration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthClientRegistration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


