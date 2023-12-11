import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Importa las funciones de Firestore


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [londing, setLoading] = useState(true);
    const { categoryId } = useParams();


useEffect(() => {
    const fetchData = async () => {
        const db = getFirestore();
        const obrasRef = collection(db, 'productos');

        try {
            const snapshot = await getDocs(obrasRef);
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            if (categoryId) {
                const filterProducts = data.filter((p) => p.categoria === categoryId);
                setProducts(filterProducts);
            } else {
                setProducts(data);
            }
        } catch (error) {
            console.error('Error fetching data from Firestore:', error);
        }
    };

    fetchData();
}, [categoryId]);

     return (
        <>
            {products.length == 0
                ?
                <h1>En Construcción de clic en el logo o en Modelo "ej. Mono"...</h1>
                :
                <ItemList products={products} />}
        </>
    );
};

export default ItemListContainer;