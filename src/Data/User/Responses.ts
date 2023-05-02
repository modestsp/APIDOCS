export const getUsersResponse = `
[
{
    "id": 1,
    "username": "mflade0",
    "name": "Maison",
    "email": "mcuttings0@stanford.edu",
    "password": "TNfcxywIOiA0",
    "createdAt": "2022-10-10T19:53:13-03:00",
    "modifiedAt": "2022-09-19T13:16:28-03:00"
  },
.
.
.
,
{
    "id": 30,
    "username": "rjohantgest",
    "name": "Ronni",
    "email": "rhailst@biblegateway.com",
    "password": "ylzDNEFDKE",
    "createdAt": "2022-10-11T01:49:38-03:00",
    "modifiedAt": "2022-12-13T05:48:13-03:00"
}
]
`
export const getUserByIdResponse = `
{
    "id": 1,
    "username": "mflade0",
    "name": "Maison",
    "email": "mcuttings0@stanford.edu",
    "password": "TNfcxywIOiA0",
    "createdAt": "2022-10-10T19:53:13-03:00",
    "modifiedAt": "2022-09-19T13:16:28-03:00"
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
      "name": "Love Disorder blue",
      "description": "Love Disorder blue is a beautiful
       blue hat that you can wear ",
      "url": "https://images.unsplash.com/photo-
      1620231109648-302d034cb29b?ixlib=
      rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH
      x8fGVufDB8fHx8&auto=format&fit
      =crop&w=1170&q=80",
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
}
]
`

export const getReviewsResponse = `
[
 {
    "id": 1,
    "content": "magnis dis parturient montes nascetur ridiculus
     mus etiam vel augue vestibulum rutrum rutrum neque",
    "rating": 4.9,
    "createdAt": "2022-12-13T09:50:25-03:00",
    "modifiedAt": "2022-05-28T00:29:45-03:00",
    "username": "mflade0",
    "userId": 1,
    "productName": "Red Fast",
    "productId": 3
  },
  {
    "id": 27,
    "content": "hac habitasse platea dictumst morbi vestibulum 
    velit id pretium iaculis diam erat fermentum justo",
    "rating": 0.9,
    "createdAt": "2022-11-28T09:39:04-03:00",
    "modifiedAt": "2022-09-02T19:17:53-03:00",
    "username": "mflade0",
    "userId": 1,
    "productName": "lumberjack boots",
    "productId": 61
  },
  {
    "id": 84,
    "content": "pulvinar lobortis est phasellus sit amet erat
     nulla tempus vivamus in felis eu",
    "rating": 3,
    "createdAt": "2022-05-17T15:47:23-03:00",
    "modifiedAt": "2022-09-11T03:33:52-03:00",
    "username": "mflade0",
    "userId": 1,
    "productName": "V blue jean",
    "productId": 46
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
}
`

export const updateUserResponse = `
{
  "id": 1,
  "username": "mflade0",
  "name": "string",
  "email": "string",
  "password": "string",
  "createdAt": "2022-10-10T19:53:13-03:00",
  "modifiedAt": "2022-09-19T13:16:28-03:00"
}
`

export const deleteUserResponse = `
204 No Content;
`

export const deleteFavoriteResponse = `
204 No Content;
`