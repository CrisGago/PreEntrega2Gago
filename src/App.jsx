import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore";
import Cart from './components/Cart/Cart';
import ThemeProvider from './context/ThemeProvider';
import ThemeComponent from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ChecKout from './components/ChecKout/ChecKout';
import Error from './components/Error/Error';


function App() {
  const [product,setProduct] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    console.log(db)

    const obrasRef = collection(db, "productos");
    const q = query(obrasRef);
    getDocs(q).then((snapshot)=>{
      setProduct(snapshot.docs.map((doc)=>(
        {id: doc.id,...doc.data()}
      )))
    })
    
  },[]);
  

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="container">

            <NavBar />
            {<CartWidget className="cart-widget" />}

            <Routes>

              <Route path='/' element={<ItemListContainer />} />
              <Route path='/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
              <Route path='/CartWidget' element={<CartWidget />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path='/ChecKout' element={<ChecKout />} />
              <Route path='*' element={<Error />} />

            </Routes>


          </div>
        </CartProvider>
      </BrowserRouter>
    </>

  );
};

export default App
