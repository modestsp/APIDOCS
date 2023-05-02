export const getReviewsRequest = `
fetch('http://localhost:3000/reviews')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getReviewByIdRequest = `
fetch('http://localhost:3000/reviews/1')
    .then(res => res.json())
    .then(json => console.log(json))
`

// export const createReviewRequest = `
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

export const updateReviewRequest = `
fetch('http://localhost:3000/reviews/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    "content": "Updated Review",
                    "rating": 2.24,
                    "userId": 1,
                    "productId": 3 
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`


export const deleteReviewRequest = `
fetch('http://localhost:3000/reviews/1/',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`

