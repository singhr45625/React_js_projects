import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import React, { useContext } from 'react';
const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    return <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/products" style={styles.link}>Products</Link>
                <Link to="/cart" style={styles.link}>Cart 🛒({cartCount})</Link>
            </nav>
}

const styles={
    nav: {
        display: 'flex',
        gap: '20px',
        padding: '50px',
        backgroundColor: '#eee',
        width: '100%'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}

export default Navbar;