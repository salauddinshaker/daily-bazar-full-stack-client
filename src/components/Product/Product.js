import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, imageURL } = props.pd;
    const history = useHistory()
      const handleBook = (name) => {
          history.push(`/order/${name}`);
      }
    return (

        <div className="card">
            <img className="img-style" src={imageURL} alt="" />
            <div className="card-body">
                <div className="card-title">
                    {name}
                </div>
                <div className="price-buy">               
                       <p>500</p>
                       <button className="buy-buton" onClick={() => handleBook(name)} >Buy</button>                                
                </div>
            </div>
        </div>      

    );
};

export default Product;