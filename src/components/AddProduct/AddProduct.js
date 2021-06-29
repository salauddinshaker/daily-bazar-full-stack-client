import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const productData ={
            name:data.name,
            imageURL:imageURL
        }
        

        const url = `https://intense-earth-85013.herokuapp.com/addProduct`;
        
        fetch(url, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productData)
        })
        .then(res =>{
            // console.log('data added', res)
        })

       

    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key','7755b0cf37f3720a863462b5c25338a7');
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


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue="New Product" {...register("name")}/>
                <br />
                <input name="name" type="file" onChange={handleImageUpload}  />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;