import React, { useState, useEffect, useContext } from "react";
import { collection, addDoc, getDoc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "firebase/firestore";
import "./checkout.css";

const Checkout = () => {
    const { cart, total,cantidadTotal, clearCart } = useContext(CartContext);
    

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [confirmacionEmail, setConfirmacionEmail] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    

    const controlFormulario = async (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !email || !confirmacionEmail) {
            setError("Por favor, completa todos los campos del formulario.");
            return;
        }

        if (email !== confirmacionEmail) {
            setError("Los correos electrónicos no coinciden");
            return;
        }
    }
        //genrar la orden
        const db = getFirestore()
        const Orden = {
           items: cart.map((producto) => ({
            id: producto.productos?.id,
            nombre: producto.productos?.nombre,
            cantidad: producto.cantidad
        })),
        total:total,
        fecha: new Date(),
        nombre,
        apellido,
        email
        }
       Promise.all(
            Orden.items.map(async(productoOrden) =>{
            const obrasRef = doc(db,"productos", productoOrden)
            const productoDoc = await getDoc(obrasRef)
            const stockActual = productoDoc.data().stock
            await updateDoc(obrasRef,{
                stock: stockActual - productoOrden.cantidad
            })
         })
       )
        .then(() =>{
            addDoc(collection(db,"ordenes"),Orden)
            .then((obrasRef) =>{
                setOrdenId(obrasRef.id);
                clearCart()
            })
        })
            .catch((error) =>{
                setError("Error al crear la orden")
            })
            .catch((error) =>{
                setError("No se actualizo el stock, intente más tarde")
            })
    


        return (
            <div>
                <h1>Checkout</h1>
                {cart.map((producto) => (
                    <div key={producto.productos?.id}>
                        <p>{producto.productos?.nombre} x {producto.cantidad}</p>
                        <p>{producto.precio}</p>
                    </div>
                ))}

                

                
                <div>               
                 <form className="checkout-form" onSubmit={controlFormulario}>
                        <div>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Apellido:
                                <input
                                    type="text"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Confirmar Email:
                                <input
                                    type="email"
                                    value={confirmacionEmail}
                                    onChange={(e) => setConfirmacionEmail(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <button type="submit">Realizar Compra</button>
                        {
                            ordenId && (
                                <p>Tu compra a finalizado con exito. Número de Orden es:(ordenId)</p>
                            )
                        }
                    </form>
                    </div>    
                

                
            </div>

      );
    };
    export default Checkout;
