# OAuth20Api

All URIs are relative to *https://api.mailodds.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createToken**](OAuth20Api.md#createtoken) | **POST** /oauth/token | Create token |
| [**getJwks**](OAuth20Api.md#getjwks) | **GET** /.well-known/jwks.json | Get JSON Web Key Set |
| [**introspectToken**](OAuth20Api.md#introspecttoken) | **POST** /oauth/introspect | Introspect token |
| [**oauthRegisterClient**](OAuth20Api.md#oauthregisterclient) | **POST** /oauth/register | Register OAuth client |
| [**oauthServerMetadata**](OAuth20Api.md#oauthservermetadata) | **GET** /.well-known/oauth-authorization-server | OAuth server metadata |
| [**revokeToken**](OAuth20Api.md#revoketoken) | **POST** /oauth/revoke | Revoke token |



## createToken

> CreateToken200Response createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, scope, codeVerifier)

Create token

Exchange an authorization code, client credentials, or refresh token for access and refresh tokens. Authenticate via client_secret_post or client_secret_basic.

### Example

```ts
import {
  Configuration,
  OAuth20Api,
} from '@mailodds/sdk';
import type { CreateTokenRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new OAuth20Api();

  const body = {
    // string
    grantType: grantType_example,
    // string | Authorization code (for authorization_code grant) (optional)
    code: code_example,
    // string | Must match the original redirect_uri (optional)
    redirectUri: redirectUri_example,
    // string (optional)
    clientId: clientId_example,
    // string (optional)
    clientSecret: clientSecret_example,
    // string | Refresh token (for refresh_token grant) (optional)
    refreshToken: refreshToken_example,
    // string | Space-separated scopes (optional)
    scope: scope_example,
    // string | PKCE code verifier (optional)
    codeVerifier: codeVerifier_example,
  } satisfies CreateTokenRequest;

  try {
    const data = await api.createToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **grantType** | `authorization_code`, `client_credentials`, `refresh_token` |  | [Defaults to `undefined`] [Enum: authorization_code, client_credentials, refresh_token] |
| **code** | `string` | Authorization code (for authorization_code grant) | [Optional] [Defaults to `undefined`] |
| **redirectUri** | `string` | Must match the original redirect_uri | [Optional] [Defaults to `undefined`] |
| **clientId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **clientSecret** | `string` |  | [Optional] [Defaults to `undefined`] |
| **refreshToken** | `string` | Refresh token (for refresh_token grant) | [Optional] [Defaults to `undefined`] |
| **scope** | `string` | Space-separated scopes | [Optional] [Defaults to `undefined`] |
| **codeVerifier** | `string` | PKCE code verifier | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateToken200Response**](CreateToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token response |  -  |
| **400** | Invalid request or grant |  -  |
| **401** | Invalid client credentials |  -  |
| **429** | Rate limited (20 req/min per client) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJwks

> JwksResponse getJwks()

Get JSON Web Key Set

Public key set for verifying JWT access tokens issued by this server.

### Example

```ts
import {
  Configuration,
  OAuth20Api,
} from '@mailodds/sdk';
import type { GetJwksRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new OAuth20Api();

  try {
    const data = await api.getJwks();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**JwksResponse**](JwksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JWKS response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## introspectToken

> IntrospectToken200Response introspectToken(token, tokenTypeHint, clientId, clientSecret)

Introspect token

Introspect a token to determine its active state and metadata (RFC 7662). Requires client authentication.

### Example

```ts
import {
  Configuration,
  OAuth20Api,
} from '@mailodds/sdk';
import type { IntrospectTokenRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new OAuth20Api();

  const body = {
    // string | Token to introspect
    token: token_example,
    // string (optional)
    tokenTypeHint: tokenTypeHint_example,
    // string (optional)
    clientId: clientId_example,
    // string (optional)
    clientSecret: clientSecret_example,
  } satisfies IntrospectTokenRequest;

  try {
    const data = await api.introspectToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | Token to introspect | [Defaults to `undefined`] |
| **tokenTypeHint** | `access_token`, `refresh_token` |  | [Optional] [Defaults to `undefined`] [Enum: access_token, refresh_token] |
| **clientId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **clientSecret** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**IntrospectToken200Response**](IntrospectToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Introspection result |  -  |
| **401** | Invalid client credentials |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthRegisterClient

> OAuthClientRegistration oauthRegisterClient()

Register OAuth client

Dynamic Client Registration (RFC 7591). Allows MCP clients to auto-register without user interaction.

### Example

```ts
import {
  Configuration,
  OAuth20Api,
} from '@mailodds/sdk';
import type { OauthRegisterClientRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new OAuth20Api();

  try {
    const data = await api.oauthRegisterClient();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OAuthClientRegistration**](OAuthClientRegistration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Registered client credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthServerMetadata

> OAuthServerMetadata oauthServerMetadata()

OAuth server metadata

OAuth 2.0 Authorization Server Metadata (RFC 8414). Returns server configuration including supported grant types, scopes, and endpoints.

### Example

```ts
import {
  Configuration,
  OAuth20Api,
} from '@mailodds/sdk';
import type { OauthServerMetadataRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new OAuth20Api();

  try {
    const data = await api.oauthServerMetadata();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OAuthServerMetadata**](OAuthServerMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeToken

> revokeToken(token, tokenTypeHint, clientId, clientSecret)

Revoke token

Revoke an access or refresh token (RFC 7009). Requires client authentication. Always returns 200 per spec to prevent token scanning.

### Example

```ts
import {
  Configuration,
  OAuth20Api,
} from '@mailodds/sdk';
import type { RevokeTokenRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const api = new OAuth20Api();

  const body = {
    // string | Token to revoke
    token: token_example,
    // string (optional)
    tokenTypeHint: tokenTypeHint_example,
    // string (optional)
    clientId: clientId_example,
    // string (optional)
    clientSecret: clientSecret_example,
  } satisfies RevokeTokenRequest;

  try {
    const data = await api.revokeToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | `string` | Token to revoke | [Defaults to `undefined`] |
| **tokenTypeHint** | `access_token`, `refresh_token` |  | [Optional] [Defaults to `undefined`] [Enum: access_token, refresh_token] |
| **clientId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **clientSecret** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token revoked (or not found, per RFC 7009) |  -  |
| **401** | Invalid client credentials |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

