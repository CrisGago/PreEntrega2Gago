import React, { useContext } from 'react';
import { BiCartDownload } from "react-icons/bi";
import './cartwidget.css'
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import { Link } from 'react-router-dom';
>>>>>>> b859ce3a21e157e27947f448937cb8040a6276df
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)
    return (
        <div>
<<<<<<< HEAD
            <Link to="/cart">
                <BiCartDownload />
                <p>Icono del carrito</p>
=======
            {/* <BiCartDownload />
            <p>0</p> */}
            <Link to="/cart">
                <p>icono del carrito</p>
>>>>>>> b859ce3a21e157e27947f448937cb8040a6276df
            </Link>
            <p>{cantidadTotal}</p>
        </div>
        
    );
};

export default CartWidget;