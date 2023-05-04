import styles from '../styles/DocsPage.module.css'
import { Link as ScrollLink } from 'react-scroll'
import DisplayCode from '../Components/DisplayCode'
import Section from '../Components/Section'

import { createUserRequest, deleteFavoritesRequest, deleteUserRequest, getFavoritesRequest, getReviewsRequest, getUserByIdRequest, updateUserRequest } from '../Data/User/Requests'
import { createUserResponse, deleteFavoriteResponse, deleteUserResponse, getFavoritesResponse, getReviewsResponse, getUserByIdResponse, updateUserResponse } from '../Data/User/Responses'

const userModel = `
 interface User {
  id: number
  username: string
  name: string
  email: string
  password: string
  createdAT: string
  modifiedAt: string
 }
 `


const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.docsTitle} >Users</h1>
        <h2 className={styles.modelTitle} >Model</h2>

        <DisplayCode code={userModel} lang='typescript' />

        <Section title="Get users" request={getUserByIdRequest} response={getUserByIdResponse} id='get-users' lang='javascript' />

        <Section title="Get user by id" request={getUserByIdRequest} response={getUserByIdResponse} id='get-user' lang='javascript' aditionalContent={`1 <= userId <= 30`} />

        <Section title="Get favorites" request={getFavoritesRequest} response={getFavoritesResponse} id='get-favorites' lang='javascript' />

        <Section title="Get reviews" request={getReviewsRequest} response={getReviewsResponse} id='get-reviews' lang='javascript' />

        <Section title="Create user" request={createUserRequest} response={createUserResponse} id='create-user' lang='javascript' />

        <Section title="Update user" request={updateUserRequest} response={updateUserResponse} id='update-user' lang='javascript' />

        <Section title="Delete user" request={deleteUserRequest} response={deleteUserResponse} id='delete-user' lang='javascript' />

        <Section title="Delete favorite" request={deleteFavoritesRequest} response={deleteFavoriteResponse} id='delete-favorite' lang='javascript' />

      </div>

      <aside className={styles.methodsMenu}>
        <p className={styles.methodsMenuTitle}>On this Page</p>
        <ScrollLink to="get-users" spy={true} smooth={true} offset={-100} duration={500}>Get Users</ScrollLink>

        <ScrollLink to="get-user" spy={true} smooth={true} offset={-100} duration={500}>Get a single user</ScrollLink>

        <ScrollLink to="get-favorites" spy={true} smooth={true} offset={-100} duration={500}>Get Favorites</ScrollLink>

        <ScrollLink to="get-reviews" spy={true} smooth={true} offset={-100} duration={500}>Get Reviews</ScrollLink>

        <ScrollLink to="create-user" spy={true} smooth={true} offset={-100} duration={500}>Create a user</ScrollLink>

        <ScrollLink to="update-user" spy={true} smooth={true} offset={-100} duration={500}>Update a user</ScrollLink>

        <ScrollLink to="delete-user" spy={true} smooth={true} offset={-100} duration={500}>Delete a user</ScrollLink>

        <ScrollLink style={{ borderBottom: '1px solid grey', paddingBottom: '1rem' }} to="delete-favorite" spy={true} smooth={true} duration={500}>Delete a favorite</ScrollLink>

      </aside>

    </div>
  )
}

export default Users;