import { Link } from "react-router-dom"
import logo from '../assets/Logo.png'
import styles from '../styles/Home.module.css'
import { AiFillGithub } from "react-icons/ai"
import Footer from "../Components/Layout/Footer"
const Home = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="Logo" style={{ marginLeft: '10px' }} />
                <ul>
                    <Link className={styles.headerLink} to="/users">Docs</Link>
                    {/* <li>Docs</li> */}
                    <Link className={styles.headerLink} to="https://github.com/srsebbi/MockClothesCommerceAPI">
                        <AiFillGithub />
                    </Link>
                </ul>
            </header>
            <section className={styles.section}>
                <h1>Mock Clothes API</h1>
                <p>Welcome to the mock clothes API! </p>
                <p>The API provides access to products, users, categories, and reviews, so you can build your innovative e-commerce solution quickly and easily. With user-friendly documentation, you can integrate our API into your project and create a seamless shopping experience for your customers. Discover our endpoints today and achieve your business goals with ease.</p>
                <Link to="/users" className={styles.btn}>Explore the API</Link>
            </section>
            <Footer />
        </main>
    )
}

export default Home