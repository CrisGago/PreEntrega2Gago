import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const db = getFirestore();
      const productoRef = collection(db, 'productos');
      let productoQuery = productoRef;

      if (categoryId) {
        productoQuery = query(productoRef, where('categoria', '==', categoryId));
      }

      try {
        const snapshot = await getDocs(productoQuery);

        const nuevosProducto = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(nuevosProducto);
      } catch (error) {
        console.error('Error al obtener datos de Firestore:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
