import React from "react";

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
export default CartItem;

