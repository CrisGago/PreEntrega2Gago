import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./cart.css";



const Cart = () => {
  const { cart, total, clearCart, removeItem } = useContext(CartContext);

  return (
    <div>
      <h1>TU CARRITO</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>No hay Propiedades seleccionadas en el carrito</h2>
          <Link to={"/"}>Ir al Inicio</Link>
        </div>
      ) : (
        <div className="cart-item-list">
          
            {cart.map((prod, index) => (
              <CartItem
                key={prod.producto.id || (prod.productos && prod.productos.id) || index}
                cartItem={prod}
                removeItem={removeItem}
              />
            ))}
       

          <div className="cart-summary">
            <h2>VALOR TOTAL DEL CARRITO: ${total}</h2>
            <div className="cart-buttons">
              <button onClick={() => clearCart()}>LIMPIAR CARRITO</button>
              <Link to="/Checkout">Finalizar la Compra</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
