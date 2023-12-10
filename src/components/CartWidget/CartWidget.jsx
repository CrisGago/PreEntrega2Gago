import React, { useContext } from 'react';
import { BiCartDownload } from "react-icons/bi";
import './cartwidget.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)
    return (
        <div>
            {/* <BiCartDownload />
            <p>0</p> */}
            <Link to="/cart">
                <p>icono del carrito</p>
            </Link>
            <p>{cantidadTotal}</p>
        </div>
    );
};

export default CartWidget;