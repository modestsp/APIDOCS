import { useState } from 'react';
import styles from '../../styles/Layout.module.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Go to</p>
      <Link to={`/users`}>User</Link>
      <Link to={`/products`}>Product</Link>
      <Link to={`/categories`}>Category</Link>
      <Link to={`/reviews`}>Review</Link>
    </aside>);
}

export default Sidebar;