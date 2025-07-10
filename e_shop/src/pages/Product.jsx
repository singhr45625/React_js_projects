import React from "react";
import ProductCard from "../components/ProductCard";
import { useState , useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async()=> {
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json() || [];
                const filteredProducts = data.filter((p) => p.price < 100);
                setProducts(filteredProducts);
            }catch(err) {
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>
                Products
            </h1>
            <div>
                {products.map((product) => {
                    <ProductCard key = {product.id} product = {product} />
                })}
            </div>
        </div>
    );
}

export default Products;