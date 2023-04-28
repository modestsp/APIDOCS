export const getUsersResponse = `
[
{
  "id": 1,
  "username": "string",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "2023-04-26T20:10:45.55699-03:00",
  "modifiedAt": "2023-04-26T20:10:45.5569917-03:00",
  "reviews": null
},
.
.
.
,
{
  "id": 30,
  "username": "string",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "2023-04-26T20:10:45.55699-03:00",
  "modifiedAt": "2023-04-26T20:10:45.5569917-03:00",
  "reviews": null
}
]
`
export const getUserByIdResponse = `
{
  "id": 1,
  "username": "string",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "2023-04-26T20:10:45.55699-03:00",
  "modifiedAt": "2023-04-26T20:10:45.5569917-03:00",
  "reviews": null
}
`
export const getFavoritesResponse = `
[
  {
    "userId": 1,
    "productId": 1,
    "user": null,
    "product": {
      "id": 1,
      "name": "string",
      "description": "string",
      "url": null,
      "price": 0,
      "stars": 0,
      "photographerUrl": null,
      "photographerName": null,
      "createdAt": "2023-04-26T20:17:07.6783451-03:00",
      "modifiedAt": "2023-04-26T20:17:07.6783476-03:00",
      "reviews": null,
      "categoryId": 1,
      "category": null,
      "tags": [
        "string"
      ]
    }
  },
  {
    "userId": 1,
    "productId": 2,
    "user": null,
    "product": {
      "id": 2,
      "name": "strasding",
      "description": "string",
      "url": null,
      "price": 0,
      "stars": 0,
      "photographerUrl": null,
      "photographerName": null,
      "createdAt": "2023-04-26T20:17:08.922586-03:00",
      "modifiedAt": "2023-04-26T20:17:08.9225878-03:00",
      "reviews": null,
      "categoryId": 1,
      "category": null,
      "tags": [
        "string"
      ]
    }
  }
]
`

export const getReviewsResponse = `
[
  {
    "id": 1,
    "content": "stasdasdring",
    "rating": 0,
    "createdAt": "2023-04-26T20:23:04.5863633-03:00",
    "modifiedAt": "2023-04-26T20:23:04.5863643-03:00",
    "username": "string",
    "userId": 1,
    "productName": "string",
    "productId": 1
  },
  {
    "id": 2,
    "content": "stasdasasddring",
    "rating": 0,
    "createdAt": "2023-04-26T20:23:08.1913792-03:00",
    "modifiedAt": "2023-04-26T20:23:08.1913792-03:00",
    "username": "string",
    "userId": 1,
    "productName": "string",
    "productId": 1
  }
]`

export const createUserResponse = `
{
  "id": 31,
  "username": "string",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "2023-04-26T20:10:45.55699-03:00",
  "modifiedAt": "2023-04-26T20:10:45.5569917-03:00",
  "reviews": null
}
`

export const updateUserResponse = `
{
  "id": 1,
  "username": "string",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "2023-04-26T20:10:45.55699-03:00",
  "modifiedAt": "2023-04-26T20:10:45.5569917-03:00",
  "reviews": null
}
`

export const deleteUserResponse = `
204 No Content;
`

export const deleteFavoriteResponse = `
204 No Content;
`