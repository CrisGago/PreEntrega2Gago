import React from "react";

<<<<<<< HEAD
const CartItem = ({ cartItem, removeItem }) => {
  // console.log("cartItem:", cartItem);

  
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

=======
const CartItem =({CartItem,removeItem}) =>{
    return (
    <div key={CartItem.productos.id}>
       <img src={CartItem.productos.img} alt={CartItem.nombre} />
       <h1>{CartItem.productos.nombre}</h1>
       <p>{CartItem.productos.precio}</p>
       <p>{CartItem.productos.stock}</p>
       <p>{CartItem.productos.descripcion}</p>
       <p>{CartItem.cantidad}</p>
       <p>{CartItem.cantidad*p.productos.precio}</p>
       <button onClick={()=>{removeItem(CartItem.productos.id)}}>ELIMINAR PRODUCTO</button>
     </div>
    )
};
>>>>>>> b859ce3a21e157e27947f448937cb8040a6276df
export default CartItem;

