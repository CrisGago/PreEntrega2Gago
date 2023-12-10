import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection,getDocs,getFirestore,query,where} from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [londing, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() => {
        setLoading(true);
        const db=getFirestore()
        const misObras =categoryId
       

        const fetchData = () => {
            return fetch("/data/productos.json")
                .then((response) => response.json())
                .then((data) => {
                    if (categoryId) {
                        const filterProducts = data.filter(p => p.categoria == categoryId)
                        setProducts(filterProducts)
                    } else {
                        setProducts(data)
                    }

                })
                .catch((error) => console.log(error))
        }

        fetchData()

    }, [categoryId])

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