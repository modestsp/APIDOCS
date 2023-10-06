export const getUsersRequest = `
fetch('https://mockclothesapi.com.ar/users')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getUserByIdRequest = `
fetch('https://mockclothesapi.com.ar/users/1') // 1 <= id <= 30
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getFavoritesRequest = `
fetch('https://mockclothesapi.com.ar/users/1/favorites')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getReviewsRequest = `
fetch('https://mockclothesapi.com.ar/users/1/favorites')
    .then(res => res.json())
    .then(json => console.log(json))`

export const createUserRequest = `
fetch('https://mockclothesapi.com.ar/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    "name": "string",
                    "username": "string",
                    "email": "string",
                    "password": "string"
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`

export const updateUserRequest = `
fetch('https://mockclothesapi.com.ar/users/1',{
            method:"PUT",
            body:JSON.stringify(
                {
                    "name": "string",
                    "email": "string",
                    "password": "string"
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`

export const deleteFavoritesRequest = `
fetch('https://mockclothesapi.com.ar/users/1/favorites/1',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`

export const deleteUserRequest = `
fetch('https://mockclothesapi.com.ar/users/1/',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`