import React from "react";

const CartItem = ({ cartItem, removeItem }) => {
  const productos = cartItem.productos || {};
  const productId = productos.id || '';

  return (
    <div key={productId} className="cart-item">
      <img src={`/img/${productos.img || ''}`} alt={productos.nombre || ''} />
      <h1>{productos.nombre || ''}</h1>
      <p>{productos.precio || ''}</p>
      <p>{productos.stock || ''}</p>
      <p>{productos.descripcion || ''}</p>
      <p>{cartItem.cantidad || ''}</p>
      <p>{cartItem.cantidad * (productos.precio || 0)}</p>
      <button onClick={() => removeItem(productId)}>
        ELIMINAR PRODUCTO
      </button>
    </div>
  );
};

export default CartItem;
