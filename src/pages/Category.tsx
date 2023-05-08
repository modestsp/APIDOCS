import styles from '../styles/DocsPage.module.css'
import { Link as ScrollLink } from 'react-scroll'
import DisplayCode from '../Components/DisplayCode'
import Section from '../Components/Section'
import { createCategoryRequest, deleteCategoryRequest, getCategoriesRequest, getCategoryByIdRequest, getProductsRequest, updateCategoryRequest } from '../Data/Category/Requests'
import { createCategoryResponse, deleteCategoryResponse, getCategoriesResponse, getCategoryByIdResponse, getProductsResponse, updateCategoryResponse } from '../Data/Category/Responses'


const categoryModel = `
 interface Category {
  id: number
  name: string
  createdAT: string
  modifiedAt: string
 }
 `


const Categories = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionContainer}>
                <h1 className={styles.docsTitle} >Categories</h1>
                <h2 className={styles.modelTitle} >Model</h2>
                <DisplayCode code={categoryModel} lang='typescript' />

                <Section title="Get categories" request={getCategoriesRequest} response={getCategoriesResponse} id='get-categories' lang='javascript' />

                <Section title="Get category by id" request={getCategoryByIdRequest} response={getCategoryByIdResponse} id='get-category' lang='javascript' />

                <Section title="Get products from a category" request={getProductsRequest} response={getProductsResponse} id='get-products' lang='javascript' />

                <Section title="Create category" request={createCategoryRequest} response={createCategoryResponse} id='create-category' lang='javascript' />

                <Section title="Update category" request={updateCategoryRequest} response={updateCategoryResponse} id='update-category' lang='javascript' />

                <Section title="Delete category" request={deleteCategoryRequest} response={deleteCategoryResponse} id='delete-category' lang='javascript' />

            </div>

            <aside className={styles.methodsMenu}>
                <p className={styles.methodsMenuTitle}>On this Page</p>
                <ScrollLink to="get-categories" spy={true} smooth={true} offset={-100} duration={500}>Get Categories</ScrollLink>

                <ScrollLink to="get-category" spy={true} smooth={true} offset={-100} duration={500}>Get a single category</ScrollLink>

                <ScrollLink to="get-products" spy={true} smooth={true} offset={-100} duration={500}>Get products from a category</ScrollLink>

                <ScrollLink to="create-category" spy={true} smooth={true} offset={-100} duration={500}>Create a category</ScrollLink>

                <ScrollLink to="update-category" spy={true} smooth={true} offset={-100} duration={500}>Update a category</ScrollLink>

                <ScrollLink style={{ borderBottom: '1px solid grey', paddingBottom: '1rem' }} to="delete-category" spy={true} smooth={true} offset={-100} duration={500}>Delete a category</ScrollLink>

            </aside>

        </div>
    )
}

export default Categories;