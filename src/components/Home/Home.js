import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import * as ReactBootStrap from 'react-bootstrap';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://intense-earth-85013.herokuapp.com/productCollection')
            .then(res => res.json())
            .then(data => {
                //loading true
                setProducts(data)
            })
    }, [])
    return (
        <div className="container">
            {
                products.map(pd => <Product pd={pd} key={pd._id}></Product>)
            }

            {loading ? products : <ReactBootStrap.Spinner animation="border" />}
        </div>
    );
};

export default Home;