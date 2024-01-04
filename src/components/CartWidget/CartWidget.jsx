import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import { BiCartDownload } from "react-icons/bi";
import './cartwidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext);

    return (
        <span className="cart-widget-container">
                <Link to="/Cart" className="cart-link">
                <BiCartDownload className="cart-icon" />
                <p className="cart-label">Mis Compras Carrito</p>
            </Link>
            {cantidadTotal > 0 && (
                <p className="cart-counter">{cantidadTotal}</p>
            )}
        </span>
    );
};

export default CartWidget;
