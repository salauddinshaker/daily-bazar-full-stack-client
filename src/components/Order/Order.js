import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Order = () => {
    const {name} = useParams();
    const [loggedInUser,setLoggedInUser] =useContext(UserContext);
    const[product, setProduct]=useState({name})
    const handleOrder= () =>{
        const Order={...loggedInUser, ...product, orderTime:new Date()};

        fetch('/addOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(Order)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data); 
        })
    }
    return (
        <div>
            <p><Link to="/home"> do you want a different product ? </Link> </p>
            <div>
                <div>
                    {name}
                </div>
            </div>
            <button onClick={handleOrder} type="button" class="btn btn-primary">Check Out</button>
        </div>
    );
};

export default Order;