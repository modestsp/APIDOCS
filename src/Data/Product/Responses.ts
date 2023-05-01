export const getProductsResponse = `
[
{
    "id": 1,
    "name": "Love Disorder blue",
    "description": "Love Disorder blue is a beautiful blue hat that you can wear ",
    "url": "https://images.unsplash.com/photo-1620231109648-302d034cb29b?ixlib=
    rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "price": 20,
    "stars": 5,
    "photographerUrl": "https://unsplash.com/es/@lovedisorder",
    "photographerName": "Andre Styles",
    "createdAt": "2023-01-16T08:41:28",
    "modifiedAt": "2023-01-16T08:41:28",
    "categoryId": 1,
    "tags": [
      "men",
      "hats",
      "blue"
    ]
  },
.
.
.
,
{
    "id": 64,
    "name": "Nike green shoes",
    "description": "Lorem ipsum dolor sit amet, consectetur
     adipiscing elit, sed do eiusmod tempor incididunt",
    "url": "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-
    4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=941&q=80",
    "price": 90,
    "stars": 0,
    "photographerUrl": "https://unsplash.com/es/@jayson_hinrichsen",
    "photographerName": "Jayson Hinrichsen",
    "createdAt": "2023-01-16T17:09:51",
    "modifiedAt": "2023-01-16T17:09:51",
    "categoryId": 4,
    "tags": [
      "men",
      "nike",
      "green shoes",
      "shoes"
    ]
  }
]
`
export const getProductsByIdResponse = `
{
  "id": 1,
  "name": "Love Disorder blue",
  "description": "Love Disorder blue is a beautiful 
  blue hat that you can wear ",
  "url": "https://images.unsplash.com/photo-1620231109648-302d034cb29b?ixlib=
  rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "price": 20,
  "stars": 5,
  "photographerUrl": "https://unsplash.com/es/@lovedisorder",
  "photographerName": "Andre Styles",
  "createdAt": "2023-01-16T08:41:28",
  "modifiedAt": "2023-01-16T08:41:28",
  "categoryId": 1,
  "tags": [
    "men",
    "hats",
    "blue"
  ]
}
`
export const getReviewsResponse = `
[
  {
    "id": 87,
    "content": "enim lorem ipsum dolor sit amet consectetuer
     adipiscing elit proin interdum mauris
      non ligula pellentesque ultrices",
    "rating": 4.8,
    "createdAt": "2022-05-02T22:52:55-03:00",
    "modifiedAt": "2022-11-07T12:59:17-03:00",
    "username": "rwollastong",
    "userId": 17,
    "productName": "Love Disorder blue",
    "productId": 1
  }
]
`
export const addProductToFavoritesResponse = `
204 No Content;
`
export const createProductResponse = `
{
  "id": 65,
  "name": "New Product",
  "description": "Lorem Ipsum",
  "price": 18.5,
  "stars": 4.3,
  "createdAt": "2023-04-29T23:49:49.1744966-03:00",
  "modifiedAt": "2023-04-29T23:49:49.1744971-03:00",
  "categoryId": 1,
  "tags": [
    "red",
    "floral"
  ]
}
`
export const addReviewToProductResponse = `
{
  "id": 101,
  "content": "Nice Product!",
  "rating": 4.3,
  "userId": 1,
  "productId": 1
}
`
export const updateProductResponse = `
{
  "id": 1,
  "name": "Love Disorder Red",
  "description": "Love Disorder Red is a red dress with a floral design.
   It is made from 100% cotton and has a soft fleece interior.
    The red dress is perfect for any occasion. It is also easy to clean.",
  "url": "https://images.unsplash.com/photo-1620231109648-302d034cb29b?ixlib=
  rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "price": 22.5,
  "stars": 5,
  "photographerUrl": "https://unsplash.com/es/@lovedisorder",
  "photographerName": "Andre Styles",
  "createdAt": "2023-01-16T08:41:28",
  "modifiedAt": "2023-01-16T08:41:28",
  "categoryId": 1,
  "tags": [
    "women"
  ]
}
`
export const deleteProductResponse = `
204 No Content;
`
