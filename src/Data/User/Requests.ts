export const getUsersRequest = `
fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getUserByIdRequest = `
fetch('http://localhost:3000/users/1')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getFavorites = `
fetch('http://localhost:3000/users/1/favorites')
    .then(res => res.json())
    .then(json => console.log(json))
`

export const getReviewsRequest = `
fetch('http://localhost:3000/users/1/favorites')
    .then(res => res.json())
    .then(json => console.log(json))`

export const createUserRequest = `
fetch('http://localhost:3000/users',{
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
fetch('http://localhost:3000/users/1',{
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
fetch('http://localhost:3000/users/1/favorites/1',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`

export const deleteUserRequest = `
fetch('http://localhost:3000/users/1/',{
    method:"DELETE"
    })
    .then(res => res.json())
    .then(json => console.log(json))
`