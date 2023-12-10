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
import Cart from './components/Cart/Cart';
import ThemeProvider from './context/ThemeProvider';

import {getFirestore,collection,getDocs,quer} from "firebase/firestore";




function App() {
  const [product, setProduct] = useState(null)

  useEffect(() =>{
    const db = getFirestore()  
    // instancia de la db
    // console.log(db)
    const obrasRef = collection(db,"productos")
    
    getDocs(obrasRef).then((snapshot) =>{
        setProduct(snapshot.docs.map((doc) => (
          {id: doc.id,...doc.data()}

        )))
    })


  },[])  
  console.log(product)

  return (
    <>
         </>

  );
};

export default App
