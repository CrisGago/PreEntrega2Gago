import React, { useContext, useState } from 'react';
import '../ItemDetail/itemdetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({ producto }) => {

    const [quantity, setQuantity] = useState(0)
    const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addToCart(producto, cantidad)
    }

    return (
        <div className="item-detail-container">
            <img className="item-detail-image" src={producto.img} alt={producto.nombre} />
            <div className="item-detail-info">
                <h2>{producto.nombre}</h2>
                <p>Stock: {producto.stock}</p>
                <p>Precio: {producto.precio}</p>
                <p>Categoria: {producto.categoria}</p>
                <p>Descripción: {producto.descripcion}</p>
            </div>
            {quantity === 0 ? (
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            ) : (
                <Link to={"/CartWidget"} className="item-detail-button">
                    Ir al carrito
                </Link>
            )}
        </div>
    );
};

export default ItemDetail;