import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <nav>
                <label className="lebelStyle">Shohoj Shodai</label>
                <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link  to="/login">Login</Link></li>
                <li><Link to ="order">Order</Link></li>
                <li><Link to="review">Review</Link></li>    
                <li><Link to="addProduct">Admin</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;