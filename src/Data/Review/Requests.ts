export const getReviewsRequest = `
fetch('https://mockclothesapi.com.ar/reviews')     
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getReviewByIdRequest = `
fetch('https://mockclothesapi.com.ar/reviews/1') // 1 <= id <= 100
    .then(res => res.json())
    .then(json => console.log(json))
`

// export const createReviewRequest = `
// fetch('https://mockclothesapi.com.ar/reviews',{
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
fetch('https://mockclothesapi.com.ar/reviews/1',{
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
fetch('https://mockclothesapi.com.ar/reviews/1/',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`

