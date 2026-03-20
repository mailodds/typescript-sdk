# ProductsApi

All URIs are relative to *https://api.mailodds.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**batchProducts**](ProductsApi.md#batchproductsoperation) | **POST** /v1/stores/{store_id}/products/batch | Batch push products |
| [**bulkUpdateProducts**](ProductsApi.md#bulkupdateproductsoperation) | **PATCH** /v1/store-products/bulk | Bulk update products |
| [**getProduct**](ProductsApi.md#getproduct) | **GET** /v1/store-products/{product_id} | Get a product |
| [**queryProducts**](ProductsApi.md#queryproducts) | **GET** /v1/store-products | Query products |



## batchProducts

> BatchProductsResponse batchProducts(storeId, batchProductsRequest)

Batch push products

Push up to 100 products to a custom platform store. Creates new products or updates existing ones matched by external_id. Only available for stores with platform&#x3D;custom.

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@mailodds/sdk';
import type { BatchProductsOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // string
    storeId: storeId_example,
    // BatchProductsRequest
    batchProductsRequest: ...,
  } satisfies BatchProductsOperationRequest;

  try {
    const data = await api.batchProducts(body);
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
| **storeId** | `string` |  | [Defaults to `undefined`] |
| **batchProductsRequest** | [BatchProductsRequest](BatchProductsRequest.md) |  | |

### Return type

[**BatchProductsResponse**](BatchProductsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch results |  -  |
| **404** | Resource not found |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkUpdateProducts

> BulkUpdateProducts200Response bulkUpdateProducts(bulkUpdateProductsRequest)

Bulk update products

Bulk update product visibility. Maximum 500 products per request.

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@mailodds/sdk';
import type { BulkUpdateProductsOperationRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // BulkUpdateProductsRequest
    bulkUpdateProductsRequest: ...,
  } satisfies BulkUpdateProductsOperationRequest;

  try {
    const data = await api.bulkUpdateProducts(body);
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
| **bulkUpdateProductsRequest** | [BulkUpdateProductsRequest](BulkUpdateProductsRequest.md) |  | |

### Return type

[**BulkUpdateProducts200Response**](BulkUpdateProducts200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bulk update result |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProduct

> GetProduct200Response getProduct(productId)

Get a product

Get detailed information about a specific product.

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@mailodds/sdk';
import type { GetProductRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // string
    productId: productId_example,
  } satisfies GetProductRequest;

  try {
    const data = await api.getProduct(body);
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
| **productId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetProduct200Response**](GetProduct200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Product details |  -  |
| **404** | Resource not found |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## queryProducts

> QueryProducts200Response queryProducts(storeId, category, stockStatus, onSale, search, facets, groupBySku, page, perPage)

Query products

Search and filter products across all connected stores. Supports faceted search and cross-store SKU deduplication for unified inventory views.

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@mailodds/sdk';
import type { QueryProductsRequest } from '@mailodds/sdk';

async function example() {
  console.log("🚀 Testing @mailodds/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProductsApi(config);

  const body = {
    // string | Filter by store connection UUID (optional)
    storeId: storeId_example,
    // string | Filter by category name (optional)
    category: category_example,
    // 'in_stock' | 'out_of_stock' | 'on_backorder' | 'preorder' | Filter by stock status (optional)
    stockStatus: stockStatus_example,
    // boolean | Filter to products currently on sale (optional)
    onSale: true,
    // string | Search by title or SKU (optional)
    search: search_example,
    // boolean | Include facet aggregations (categories, price ranges, stores) (optional)
    facets: true,
    // boolean | Merge products with same SKU across stores into unified entries (optional)
    groupBySku: true,
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
  } satisfies QueryProductsRequest;

  try {
    const data = await api.queryProducts(body);
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
| **storeId** | `string` | Filter by store connection UUID | [Optional] [Defaults to `undefined`] |
| **category** | `string` | Filter by category name | [Optional] [Defaults to `undefined`] |
| **stockStatus** | `in_stock`, `out_of_stock`, `on_backorder`, `preorder` | Filter by stock status | [Optional] [Defaults to `undefined`] [Enum: in_stock, out_of_stock, on_backorder, preorder] |
| **onSale** | `boolean` | Filter to products currently on sale | [Optional] [Defaults to `undefined`] |
| **search** | `string` | Search by title or SKU | [Optional] [Defaults to `undefined`] |
| **facets** | `boolean` | Include facet aggregations (categories, price ranges, stores) | [Optional] [Defaults to `false`] |
| **groupBySku** | `boolean` | Merge products with same SKU across stores into unified entries | [Optional] [Defaults to `false`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **perPage** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**QueryProducts200Response**](QueryProducts200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Product query results |  -  |
| **401** | Unauthorized - Invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

