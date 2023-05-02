import logo from "../../assets/LG2.png"
import styles from '../../styles/Layout.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" style={{ marginLeft: '10px' }} />
      <ul>
        <li>Home</li>
        <li>Docs</li>
        <li>Github</li>
      </ul>
    </header>
  );
}

export default Header;