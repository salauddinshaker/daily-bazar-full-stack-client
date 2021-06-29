import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/productCollection')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className="container">
            {
                products.map(pd => <Product pd={pd} key = {pd._id}></Product>)
            }
        </div>
    );
};

export default Home;