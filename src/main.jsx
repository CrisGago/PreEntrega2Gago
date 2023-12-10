import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyyTjhaCu9RX9COtl-O-h_BaC6XLzVKBA",
  authDomain: "proyectofinalcg.firebaseapp.com",
  projectId: "proyectofinalcg",
  storageBucket: "proyectofinalcg.appspot.com",
  messagingSenderId: "420506746564",
  appId: "1:420506746564:web:2595975c0e20c055b65391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
