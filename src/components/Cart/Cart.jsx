import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./cart.css"; 

const Cart = () => {
  const { cart, total, clearCart, removeItem } = useContext(CartContext);

  return (
    <div>
      <h1>TU CARRITO</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>No hay Obras en el carrito</h2>
          <Link to={"/"}>Ir al Inicio</Link>
        </div>
      ) : (
        <div>
          <ul className="cart-item-list">

            {cart && cart.map((p) => (
              <CartItem key={p.productos && p.productos.id} cartItem={p} removeItem={removeItem} />
            ))}
            
          </ul>

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
