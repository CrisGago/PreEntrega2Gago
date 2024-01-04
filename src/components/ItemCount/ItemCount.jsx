import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {


    const [count, setCount] = useState(initial)
    const [errorMessage, setErrorMessage] = useState('');

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const addToCart = () => {
        if (stock === null || stock === 0) {
            setErrorMessage('No hay stock disponible.');
        } else {
            setErrorMessage('');
            onAdd(count);
        }
    };

    return (
        <div>
            <button onClick={increment}>Incrementar</button>
            <span>{count}</span>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={addToCart}>Agregar al carrito</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default ItemCount;