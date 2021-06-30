import { Link } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Review.css';

const Review = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()

    const goHome = ()=>{
        history.push('/home'); 
    }


    useEffect(() => {
        fetch('https://intense-earth-85013.herokuapp.com/ordersCollection?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div style={{textAlign:'center'}} className="review-batton">
        <div>
            <h4>You Have :{orders.length} Orders</h4>
            {
                orders.map(order => <li>{order.email} Product:{order.name}</li>)
            }
        </div>
        <div>
        <Link to="/home"><buttun onClick={goHome} className="go-home-batton" >Go Home</buttun></Link>
        </div>
        </div>

    );
};

export default Review;