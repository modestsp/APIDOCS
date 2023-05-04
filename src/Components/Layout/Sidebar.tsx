import { useEffect, useState } from 'react';
import styles from '../../styles/Layout.module.css'
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/users':
        setSelected('user');
        break;
      case '/products':
        setSelected('product');
        break;
      case '/categories':
        setSelected('category');
        break;
      case '/reviews':
        setSelected('review');
        break;
      default:
        setSelected('');
        break;
    }
  }, [location])

  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Section</p>
      <Link
        style={{ color: selected === "user" ? "white" : "gainsboro", backgroundColor: selected === "user" ? "rgba(128, 128, 128, 0.575)" : "transparent" }}
        onClick={() => setSelected("user")} to={`/users`}>Users</Link>
      <Link
        onClick={() => setSelected("product")}
        style={{ color: selected === "product" ? "white" : "gainsboro", backgroundColor: selected === "product" ? "rgba(128, 128, 128, 0.575)" : "transparent" }} to={`/products`}>Products</Link>
      <Link
        onClick={() => setSelected("category")}
        style={{ color: selected === "category" ? "white" : "gainsboro", backgroundColor: selected === "category" ? "rgba(128, 128, 128, 0.575)" : "transparent" }} to={`/categories`}>Categories</Link>
      <Link
        onClick={() => setSelected("review")}
        style={{ color: selected === "review" ? "white" : "gainsboro", backgroundColor: selected === "review" ? "rgba(128, 128, 128, 0.575)" : "transparent" }} to={`/reviews`}>Reviews</Link>
    </aside>);
}

export default Sidebar;