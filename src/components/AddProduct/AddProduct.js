import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css';


const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    //product delete
    const [products, setProducts] = useState([]);

    const onSubmit = data => {
        console.log(data);
        const productData = {
            name: data.name,
            imageURL: imageURL
        }


        const url = `https://intense-earth-85013.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                // console.log('data added', res)
            })



    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', '7755b0cf37f3720a863462b5c25338a7');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // load product to delete
    useEffect(() => {
        fetch('https://intense-earth-85013.herokuapp.com/productCollection')
            .then(res => res.json())
            .then(data => {
                //loading true
                setProducts(data)
            })
    }, []);

    function deleteProduct(event,id){
        fetch(`/delete/${id} `, {
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(result=>{
           if(result){
               event.target.parentNode.style.display='none';
           }
        })     
     }

    return (
        <div style={{textAlign:'center'}}>
            <div className="add-product">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Add New Product</h3>
                    <input className="add-input" name="name" defaultValue="New Product" {...register("name")} />
                    <br />
                    <input className="add-input" name="name" type="file" onChange={handleImageUpload} />
                    <br />
                    <input className="add-input" type="submit" />
                </form>
            </div>
            <div className="product-loading">
                {
                    products.map(pd => <li><span>{pd._id}</span> <strong>{pd.name}</strong>
                     <button style={{color:'red'}} onClick={()=>deleteProduct('${pd._id}')}>delete</button></li>)
                }
            </div>
        </div>
    );
};

export default AddProduct;