import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Error from './components/Error/Error';

function App() {


  return (
    <>
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <CartWidget className="cart-widget" />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/CartWidget' element={<CartWidget />} />
            <Route path='*' element={<Error />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
};

export default App
