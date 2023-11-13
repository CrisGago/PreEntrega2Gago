import React from 'react';
import { BiCartDownload } from "react-icons/bi";
import './cartwidget.css'

const CartWidget = () => {
    return (
        <div>
            <BiCartDownload />
            <p>0</p>
        </div>
    );
};

export default CartWidget;