import styles from '../../styles/Layout.module.css'
import gitHubIcon from '../../assets/gitHubIcon.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="https://github.com/modestsp/"><img src={gitHubIcon} alt={'go to my personal github page'} width={20} height={20} /></Link>

      <span > Sebastián Perichón © 2023</span>
    </footer>
  )
}

export default Footer;