import styles from '../styles/DocsPage.module.css'
import { Link as ScrollLink } from 'react-scroll'
import DisplayCode from '../Components/DisplayCode'
import Section from '../Components/Section'
import { deleteReviewRequest, getReviewByIdRequest, updateReviewRequest } from '../Data/Review/Requests'
import { deleteReviewResponse, getReviewByIdResponse, getReviewsResponse, updateReviewResponse } from '../Data/Review/Responses'

const reviewModel = `
 interface review {
  id: number
  content: string
  rating: number
  userId: number
  user: User
  productId: number
  product: Product
  createdAT: string
  modifiedAt: string
 }
 `


const Reviews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionContainer}>
                <h1 className={styles.docsTitle} >Reviews</h1>
                <h2 className={styles.modelTitle} >Model</h2>
                <DisplayCode code={reviewModel} lang='typescript' />

                <Section title="Get reviews" request={getReviewByIdRequest} response={getReviewsResponse} id='get-reviews' lang='javascript' />

                <Section title="Get reviews by id" request={getReviewByIdRequest} response={getReviewByIdResponse} id='get-review' lang='javascript' aditionalContent={`1 <= categoryId <= 30`} />

                <Section title="Update review" request={updateReviewRequest} response={updateReviewResponse} id='update-review' lang='javascript' />

                <Section title="Delete review" request={deleteReviewRequest} response={deleteReviewResponse} id='delete-review' lang='javascript' />

            </div>

            <aside className={styles.methodsMenu}>
                <p className={styles.methodsMenuTitle}>On this Page</p>
                <ScrollLink to="get-reviews" spy={true} smooth={true} offset={-100} duration={500}>Get Reviews</ScrollLink>

                <ScrollLink to="get-review" spy={true} smooth={true} offset={-100} duration={500}>Get a single review</ScrollLink>
                {/* 
                <ScrollLink to="get-products" spy={true} smooth={true} offset={-100} duration={500}>Get products</ScrollLink> */}
                {/* 
                <ScrollLink to="create-reviews" spy={true} smooth={true} offset={-100} duration={500}>Create a review</ScrollLink> */}

                <ScrollLink to="update-review" spy={true} smooth={true} offset={-100} duration={500}>Update a review</ScrollLink>

                <ScrollLink style={{ borderBottom: '1px solid grey', paddingBottom: '1rem' }} to="delete-review" spy={true} smooth={true} offset={-100} duration={500}>Delete a review</ScrollLink>

            </aside>

        </div>
    )
}

export default Reviews;