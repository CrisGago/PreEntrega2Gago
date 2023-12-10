import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const {cart,total,clearCart,removeItem} = useContext(CartContext);
console.log(cart)
  
  return (
    <div>

      <h1>TU CARRITO</h1>

      <div>

        {
          cart.map((p)=>(
            <div key={p.productos.id}>
              <img src={p.productos.img} alt={p.nombre} />
              <h1>{p.productos.nombre}</h1>
              <p>{p.productos.precio}</p>
              <p>{p.productos.stock}</p>
              <p>{p.producto.descripcion}</p>
              <p>{p.cantidad}</p>
              <p>{p.cantidad*p.productos.precio}</p>
              <button onClick={()=>{removeItem(p.productos.id)}}>ELIMINAR PRODUCTO</button>
            </div>
          ))
        }

      </div>

      <h2>VALOR TOTAL DEL CARRITO: ${total}</h2>
      <button onClick={()=>{clearCart()}}>LIMPIAR CARRITO</button>
    </div>
  );
};

export default Cart;
