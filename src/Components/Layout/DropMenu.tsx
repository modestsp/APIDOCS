import { useEffect, useState } from "react";
import styles from '../../styles/Layout.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import { BiRightArrow } from 'react-icons/bi'

const DropMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [, setSelected] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/docs/users':
                setSelected('docs/users');
                break;
            case '/docs/products':
                setSelected('docs/products');
                break;
            case '/docs/categories':
                setSelected('docs/categories');
                break;
            case '/docs/reviews':
                setSelected('docs/reviews');
                break;
            default:
                setSelected('');
                break;
        }
    }, [location])

    const handleSelected = (e: React.MouseEvent<HTMLLIElement>) => {
        setSelected(e.currentTarget.id);
        navigate("/" + e.currentTarget.id.toLocaleLowerCase())
    }

    return (
        <div className={styles.dropMenu} onClick={() => setOpen(!open)}>
            <div className={styles.dropMenuTitle}>            <BiRightArrow style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', color: '#fff', TransitionEvent: 'all 0.15s ease' }} />
                <span>Section</span>
                {/* <p>{selected}</p> */}
            </div>
            <ul className={open ? styles.openMenu : styles.closeMenu}>
                <li id="docs/users" onClick={handleSelected}>Users</li>
                <li id="docs/products" onClick={handleSelected}>Products</li>
                <li id="docs/categories" onClick={handleSelected}>Categories</li>
                <li id="docs/reviews" onClick={handleSelected}>Reviews</li>
            </ul>
        </div>
    );
};

export default DropMenu;