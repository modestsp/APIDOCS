const url = import.meta.env.VITE_REACT_API_URL;

export const getProductsRequest = `
fetch('https://mockclothesapi.onrender.com/products') // 1 <= id <= 64
    .then(res => res.json())
    .then(json => console.log(json))
`
export const getProductByIdRequest = `
fetch('https://mockclothesapi.onrender.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))
`
export const getReviewsRequest = `
fetch('https://mockclothesapi.onrender.com/products/1/reviews')
    .then(res => res.json())
    .then(json => console.log(json))
`
export const addProductToFavoritesRequest = `
fetch('https://mockclothesapi.onrender.com/products/1/favorites', {
    method: "POST",
    body: JSON.stringify(
        {
            "userId": 1,
            "productId": 1
        })
})
    .then(res => res.json())
    .then(json => console.log(json))`

export const createProductRequest = `
fetch('https://mockclothesapi.onrender.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    "name": "New Product",
                    "description": "Lorem Ipsum",
                    "price": 18.5,
                    "stars": 4.3,
                    "categoryId": 1,
                    "tags": [
                            "red",
                            "floral"
                            ]
                })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`
export const addReviewToProductRequest = `
fetch('https://mockclothesapi.onrender.com/products/1/reviews',{
            method:"POST",
            body:JSON.stringify(
                {
                    "content": "Nice Product!",
                    "rating": 4.3,
                    "userId": 1,
                    "productId": 1
                })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`
export const updateProductRequest = `
fetch('https://mockclothesapi.onrender.com/products/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    "name": "Love Disorder Red",
                    "description": "Love Disorder Red is a red dress with a floral design.
                    It is made from 100% cotton and has a soft fleece interior.
                    The red dress is perfect for any occasion. It is also easy to clean.",
                    "price": 22.5,
                    "tags": [
                        "women"
                            ]
                } 
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`
export const deleteProductRequest = `
fetch('https://mockclothesapi.onrender.com/products/1/',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`