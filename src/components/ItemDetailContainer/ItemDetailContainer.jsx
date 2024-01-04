import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productRef = doc(db, 'productos', idProduct);

      try {
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          const foundProduct = { id: docSnap.id, ...docSnap.data() };
          setProduct(foundProduct);
        } else {
          console.log('¡El documento no existe!');
        }
      } catch (error) {
        console.error('Error al obtener datos de Firestore:', error);
      }
    };

    fetchData();
  }, [idProduct]);

  return (
    <div>
      {product.id ? (
        <ItemDetail producto={product} />
      ) : (
        <p>CARGANDO...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
