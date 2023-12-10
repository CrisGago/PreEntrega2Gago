import React,{createContext, useState} from "react";

//PASO 1: CREAR LA INSTANCIA DEL CONTEXTO
export const CartContext = createContext()

//PASO 2: CREAR EL PROVIDER
export const CartProvider = ({children}) => {

    //PASO 8: CREAR EL CARRITO, CANTIDAD Y TOTAL
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadTotal,setCantidadTotal] = useState(0)

    //PASO 9: FUNCIONALIDADES DEL CARRITO

    //FUNCIÓN ENCARGADA DE AGREGAR AL CARRITO
    const addToCart = (producto, cantidad) => {
        const productoExistente = cart.find(prod => prod.producto.id === producto.id);
    
        if (!productoExistente) {
            setCart(prev => [...prev, { producto, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + producto.precio * cantidad);
        } else {
            const carritoActualizado = cart.map(prod => {
                if (prod.producto.id === producto.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
    
            setCart(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + producto.precio * cantidad);
        }
    };

    //FUNCIÓN ENCARGADA DE REMOVER PRODUCTOS DEL CARRITO
    const removeItem = (id) => {
        const productoEliminado = cart.find(prod => prod.producto.id === id);
        const carritoActualizado = cart.filter(prod => prod.producto.id !== id);
    
        setCart(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - productoEliminado.producto.precio * productoEliminado.cantidad);
    };

    //FUNCIÓN ENCARGADA DE LIMPIAR EL CARRITO 
    const clearCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return(
        //PASO 3: COMPARTIR LAS DIVERSAS FUNCIONALIDADES EN EL CONTEXTO
        <CartContext.Provider
            value={
                {
                    cart,
                    total,
                    cantidadTotal,
                    addToCart,
                    removeItem,
                    clearCart
                }    
            }>
            {children}
        </CartContext.Provider>
    )

}