import React, {useState} from 'react';

const UseCounter = (initial) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    const mensaje = () => {
        alert("LLEGAMOS HASTA AQUÍ") // DE PRUEBA MODIFICAR MENSAJE DESPUES
    }

    
    return {count,increment,decrement,mensaje};
};

export default UseCounter;