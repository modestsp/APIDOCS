export const getReviewsResponse = `
[
  {
    "id": 1,
    "content": "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
    "rating": 4.9,
    "userId": 1,
    "user": null,
    "productId": 3,
    "product": null,
    "createdAt": "2022-12-13T09:50:25-03:00",
    "modifiedAt": "2022-05-28T00:29:45-03:00"
  },
  .
  .
  .,
    {
    "id": 100,
    "content": "id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at",
    "rating": 4.3,
    "userId": 20,
    "user": null,
    "productId": 46,
    "product": null,
    "createdAt": "2022-05-26T22:42:23-03:00",
    "modifiedAt": "2022-08-15T08:48:21-03:00"
  }
`

export const getReviewByIdResponse = `
{
  "id": 1,
  "content": "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
  "rating": 4.9,
  "userId": 1,
  "user": null,
  "productId": 3,
  "product": null,
  "createdAt": "2022-12-13T09:50:25-03:00",
  "modifiedAt": "2022-05-28T00:29:45-03:00"
}
`

// export const createReviewResponse = `
// fetch('http://localhost:3000/reviews',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     "name": "Cars",
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// `

export const updateReviewResponse = `
204 No Content;
`


export const deleteReviewResponse = `
204 No Content;
`


