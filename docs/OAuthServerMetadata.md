
# OAuthServerMetadata

OAuth 2.0 Authorization Server Metadata (RFC 8414)

## Properties

Name | Type
------------ | -------------
`issuer` | string
`authorizationEndpoint` | string
`tokenEndpoint` | string
`revocationEndpoint` | string
`introspectionEndpoint` | string
`jwksUri` | string
`responseTypesSupported` | Array&lt;string&gt;
`grantTypesSupported` | Array&lt;string&gt;
`tokenEndpointAuthMethodsSupported` | Array&lt;string&gt;
`scopesSupported` | Array&lt;string&gt;
`codeChallengeMethodsSupported` | Array&lt;string&gt;
`revocationEndpointAuthMethodsSupported` | Array&lt;string&gt;
`introspectionEndpointAuthMethodsSupported` | Array&lt;string&gt;

## Example

```typescript
import type { OAuthServerMetadata } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "issuer": null,
  "authorizationEndpoint": null,
  "tokenEndpoint": null,
  "revocationEndpoint": null,
  "introspectionEndpoint": null,
  "jwksUri": null,
  "responseTypesSupported": null,
  "grantTypesSupported": null,
  "tokenEndpointAuthMethodsSupported": null,
  "scopesSupported": null,
  "codeChallengeMethodsSupported": null,
  "revocationEndpointAuthMethodsSupported": null,
  "introspectionEndpointAuthMethodsSupported": null,
} satisfies OAuthServerMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthServerMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


