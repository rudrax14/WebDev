import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    async function fetchProducts() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div>
            {
                loading ? <Spinner /> : products.length > 0 ? (
                    <div>
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                ) : (<div>No products found</div>)
            }
        </div>
    );
}

export default Home;
