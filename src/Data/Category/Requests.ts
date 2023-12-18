export const getCategoriesRequest = `
fetch('https://mockclothesapi.onrender.com/categories') // 1 <= id <= 4
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getCategoryByIdRequest = `
fetch('https://mockclothesapi.onrender.com/categories/1')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getProductsRequest = `
fetch('https://mockclothesapi.onrender.com/categories/1/products')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const createCategoryRequest = `
fetch('https://mockclothesapi.onrender.com/categories',{
            method:"POST",
            body:JSON.stringify(
                {
                    "name": "Cars",
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`

export const updateCategoryRequest = `
fetch('https://mockclothesapi.onrender.com/categories/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    "name": "Shoes",
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`


export const deleteCategoryRequest = `
fetch('https://mockclothesapi.onrender.com/categories/1/',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`

