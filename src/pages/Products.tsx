import styles from "../styles/DocsPage.module.css"
import { Link as ScrollLink } from 'react-scroll'
import DisplayCode from '../Components/DisplayCode'
import Section from '../Components/Section'
import { addProductToFavoritesRequest, addReviewToProductRequest, createProductRequest, deleteProductRequest, getProductByIdRequest, getProductsRequest, getReviewsRequest, updateProductRequest } from '../Data/Product/Requests'
import { addProductToFavoritesResponse, addReviewToProductResponse, createProductResponse, deleteProductResponse, getProductsByIdResponse, getProductsResponse, getReviewsResponse, updateProductResponse } from '../Data/Product/Responses'

const productModel = `
 interface Product {
  id: number
  name: string
  description: string
  url: string
  price: number
  stars: number
  photographerUrl: string
  photographerName: string
  createdAT: string
  modifiedAt: string
  categoryId: number
  tags: string[]
 }
 `


const Products = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionContainer}>
                <h1 className={styles.docsTitle}>Products</h1>
                <h2 className={styles.modelTitle}>Model</h2>

                <DisplayCode code={productModel} lang='typescript' />

                <Section title="Get products" request={getProductsRequest} response={getProductsResponse} id='get-products' lang='javascript' />

                <Section title="Get product by id" request={getProductByIdRequest} response={getProductsByIdResponse} id='get-product' lang='javascript' />

                <Section title="Get reviews" request={getReviewsRequest} response={getReviewsResponse} id='get-reviews' lang='javascript' />

                <Section title="Add a product to favorites" request={addProductToFavoritesRequest} response={addProductToFavoritesResponse} id='add-product-to-favorites' lang='javascript' />

                <Section title="Create a product" request={createProductRequest} response={createProductResponse} id='create-product' lang='javascript' />

                <Section title="Add a review" request={addReviewToProductRequest} response={addReviewToProductResponse} id='add-review' lang='javascript' />

                <Section title="Update a product" request={updateProductRequest} response={updateProductResponse} id='update-product' lang='javascript' />

                <Section title="Delete a product" request={deleteProductRequest} response={deleteProductResponse} id='delete-product' lang='javascript' />

            </div>

            <aside className={styles.methodsMenu}>
                <p className={styles.methodsMenuTitle}>On this Page</p>
                <ScrollLink to="get-products" spy={true} smooth={true} offset={-100} duration={500}>Get Products</ScrollLink>

                <ScrollLink to="get-product" spy={true} smooth={true} offset={-100} duration={500}>Get a single product</ScrollLink>

                <ScrollLink to="get-reviews" spy={true} smooth={true} offset={-100} duration={500}>Get reviews</ScrollLink>

                <ScrollLink to="add-product-to-favorites" spy={true} smooth={true} offset={-100} duration={500}>Add a product to favorites</ScrollLink>

                <ScrollLink to="create-product" spy={true} smooth={true} offset={-100} duration={500}>Create a product</ScrollLink>

                <ScrollLink to="add-review" spy={true} smooth={true} offset={-100} duration={500}>Add a review</ScrollLink>

                <ScrollLink to="update-product" spy={true} smooth={true} offset={-100} duration={500}>Update a product</ScrollLink>

                <ScrollLink style={{ borderBottom: '1px solid grey', paddingBottom: '1rem' }} to="delete-product" spy={true} smooth={true} offset={-100} duration={500}>Delete a product</ScrollLink>

            </aside>

        </div>
    )
}

export default Products;