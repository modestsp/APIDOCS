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
            case '/users':
                setSelected('Users');
                break;
            case '/products':
                setSelected('Products');
                break;
            case '/categories':
                setSelected('Categories');
                break;
            case '/reviews':
                setSelected('Reviews');
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
                <li id="Users" onClick={handleSelected}>Users</li>
                <li id="Products" onClick={handleSelected}>Products</li>
                <li id="Categories" onClick={handleSelected}>Categories</li>
                <li id="Reviews" onClick={handleSelected}>Reviews</li>
            </ul>
        </div>
    );
};

export default DropMenu;