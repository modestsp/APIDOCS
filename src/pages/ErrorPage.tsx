import { Link } from "react-router-dom"
import styles from '../styles/ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <h1>Oops!</h1>
            <p>Something went wrong</p>
            <Link to="/">Go back</Link>
        </div>
    )

}

export default ErrorPage 