import React from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({ cartItem, removeItem }) => {
  const producto = cartItem.productos || {};
  const productId = producto.id || '';

  return (
    <div key={cartItem.producto.productId} className="cart-item">
      <img src={cartItem.producto.img} alt={cartItem.producto.nombre} />
      <h1>{cartItem.producto.nombre || ''}</h1>
      <p>{cartItem.producto.precio || ''}</p>
      <p>{cartItem.producto.stock || ''}</p>
      <p>{cartItem.producto.descripcion || ''}</p>
      <p>{cartItem.cantidad || ''}</p>
      <p>{cartItem.cantidad * (cartItem.producto.precio || 0)}</p>
      <button onClick={() => removeItem(cartItem.producto.id)}>
        ELIMINAR PRODUCTO
      
      </button>
    </div>
  );
};

export default CartItem;