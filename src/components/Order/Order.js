import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Order.css';

const Order = () => {
    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState({ name })
    const handleOrder = () => {
        const Order = { ...loggedInUser, ...product, orderTime: new Date() };

        fetch('https://intense-earth-85013.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className="parent">
            <div>
                <p><Link to="/home"> do you want a different product ? </Link> </p>
            </div>
            <div>
               <p className="ordered-item">You have chosen : {name}</p> 
            </div>
           <Link to="/Review"> <button onClick={handleOrder} type="button" class="order-batton">Place Order</button></Link>
        </div>
    );
};

export default Order;