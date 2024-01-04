
import React, { useState, useEffect, useContext } from "react";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "firebase/firestore";
import "./checkout.css";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [confirmacionEmail, setConfirmacionEmail] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState(null);
    const [formEnviado, setFormEnviado] = useState(false);
    const [ordenProcesada, setOrdenProcesada] = useState(false);

    const { cart, total, clearCart } = useContext(CartContext);

    const controlFormulario = (event) => {
        event.preventDefault();

        if (!formEnviado) {
            if (!nombre || !apellido || !email || !confirmacionEmail) {
                setError("Por favor, completa todos los campos del formulario.");
                return;
            }

            if (email !== confirmacionEmail) {
                setError("Los correos electrónicos no coinciden");
                return;
            }

            setFormEnviado(true);
        }
    };

    useEffect(() => {
        const generarOrden = async () => {
            const db = getFirestore();
            const orden = {
                items: cart.map((producto) => ({
                    id: producto.producto.id,
                    nombre: producto.producto.nombre,
                    cantidad: producto.cantidad
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                email
            };

            try {
                // Actualizar stock
                await Promise.all(
                    orden.items.map(async (productoOrden) => {
                        const productoRef = doc(db, "productos", productoOrden.id);
                        const productoDoc = await getDoc(productoRef);
                        const stockActual = productoDoc.data().stock;

                        if (stockActual === null || stockActual === 0 || stockActual < productoOrden.cantidad) {
                            throw new Error(`No hay suficiente stock para ${productoOrden.nombre}.`);
                        }

                        await updateDoc(productoRef, {
                            stock: stockActual - productoOrden.cantidad
                        });
                    })
                );

                // Agregar orden a la colección
                const docRef = await addDoc(collection(db, "ordenes"), orden);
                setOrdenId(docRef.id);
                clearCart();
                setOrdenProcesada(true);
            } catch (error) {
                setError("Error al procesar la orden: " + error.message);
            }
        };

        if (formEnviado && !ordenProcesada) {
            generarOrden();
        }
    }, [formEnviado, cart, total, nombre, apellido, email, confirmacionEmail, clearCart, ordenProcesada]);

    return (
        <div>
            <h1>Ingresa tus datos</h1>
            <form onSubmit={controlFormulario} className="formulario">
                {cart.map((producto) => (
                    <div key={producto.producto.id}>
                        <p>
                            {" "}
                            {producto.producto.nombre} x {producto.cantidad}{" "}
                        </p>
                        <p>{producto.precio}</p>
                    </div>
                ))}

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
                <button type="submit" disabled={formEnviado}>
                    Comprar
                </button>
            </form>

            {ordenId && (
                <strong className="ordenid">
                    <p>Tu compra ha finalizado con éxito. Número de Orden: {ordenId}</p>
                </strong>
            )}
        </div>
    );
};

export default Checkout;
