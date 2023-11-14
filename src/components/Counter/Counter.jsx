import React from 'react';
import UseCounter from '../UseCounter/UseCounter';

const Counter = () => {

    const {count,increment,decrement} = UseCounter(0)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>AUMENTO</button>
            <button onClick={decrement}>DECREMENTO</button>
        </div>
    );
};

export default Counter;