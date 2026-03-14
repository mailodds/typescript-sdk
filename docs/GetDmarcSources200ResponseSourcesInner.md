
# GetDmarcSources200ResponseSourcesInner


## Properties

Name | Type
------------ | -------------
`sourceIp` | string
`hostname` | string
`org` | string
`count` | number
`dkimPass` | number
`dkimFail` | number
`spfPass` | number
`spfFail` | number
`disposition` | string

## Example

```typescript
import type { GetDmarcSources200ResponseSourcesInner } from '@mailodds/sdk'

// TODO: Update the object below with actual values
const example = {
  "sourceIp": null,
  "hostname": null,
  "org": null,
  "count": null,
  "dkimPass": null,
  "dkimFail": null,
  "spfPass": null,
  "spfFail": null,
  "disposition": null,
} satisfies GetDmarcSources200ResponseSourcesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDmarcSources200ResponseSourcesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


