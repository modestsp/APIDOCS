import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png"
import styles from '../../styles/Layout.module.css'
import { AiFillGithub } from 'react-icons/ai'
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" style={{ marginLeft: '10px' }} />
      <ul>
        <Link className={styles.headerLink} to="/">Home</Link>
        {/* <li>Docs</li> */}
        <Link className={styles.headerLink} to="https://github.com/modestsp/MockClothesCommerceAPI">
          <AiFillGithub />
        </Link>
      </ul>
    </header>
  );
}

export default Header;