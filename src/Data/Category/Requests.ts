export const getCategoriesRequest = `
fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getCategoryByIdRequest = `
fetch('http://localhost:3000/categories/1')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getProductsRequest = `
fetch('http://localhost:3000/categories/1/products')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const createCategoryRequest = `
fetch('http://localhost:3000/categories',{
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
fetch('http://localhost:3000/categories/1',{
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
fetch('http://localhost:3000/categories/1/',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`

