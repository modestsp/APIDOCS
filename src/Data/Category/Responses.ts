export const getCategoriesResponse = `
[
  {
    "id": 1,
    "name": "Hats",
    "createdAt": "2023-04-30T22:13:32.9398401Z",
    "modifiedAt": "2023-04-30T22:13:32.9398696Z"
  },{
    "id": 2,
    "name": "Jewelry",
    "createdAt": "2023-04-30T22:13:32.9895926Z",
    "modifiedAt": "2023-04-30T22:13:32.9895929Z"
  },
  {
    "id": 3,
    "name": "Women",
    "createdAt": "2023-04-30T22:13:32.9898138Z",
    "modifiedAt": "2023-04-30T22:13:32.9898139Z"
  },
  {
    "id": 4,
    "name": "Men",
    "createdAt": "2023-04-30T22:13:32.9898513Z",
    "modifiedAt": "2023-04-30T22:13:32.9898513Z"
  }
]
`

export const getCategoryByIdResponse = `
{
  "id": 1,
  "name": "Hats",
  "createdAt": "2023-04-30T22:13:32.9398401Z",
  "modifiedAt": "2023-04-30T22:13:32.9398696Z",
  "products": null
}
`

export const getProductsResponse = `
[
  {
    "id": 1,
    "name": "Love Disorder blue",
    "description": "Love Disorder blue is a beautiful blue hat that you can wear ",
    "price": 20,
    "stars": 4.8,
    "createdAt": "2023-01-16T08:41:28",
    "modifiedAt": "2023-01-16T08:41:28",
    "url": "https://images.unsplash.com/photo-1620231109648-302d034cb29b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "photographerName": "Andre Styles",
    "photographerUrl": "https://unsplash.com/es/@lovedisorder",
    "categoryId": 1,
    "tags": [
      "men",
      "hats",
      "blue"
    ]
  },
  .
  .
  .,
   {
    "id": 9,
    "name": "Beach Hat",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    "price": 24,
    "stars": 0,
    "createdAt": "2023-01-16T08:49:35",
    "modifiedAt": "2023-01-16T08:49:35",
    "url": "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "photographerName": "Mary Oloumi",
    "photographerUrl": "https://unsplash.com/es/@laviebohemo",
    "categoryId": 1,
    "tags": [
      "women",
      "hats",
      "summer",
      "pink"
    ]
  }
]
`

export const createCategoryResponse = `
{
  "id": 5,
  "name": "Cars",
  "createdAt": "2023-05-02T22:09:59.1324436Z",
  "modifiedAt": "2023-05-02T22:09:59.1324437Z"
}
`

export const updateCategoryResponse = `
204 No Content;
`


export const deleteCategoryResponse = `
204 No Content;
`


