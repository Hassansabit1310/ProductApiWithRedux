import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'



const CreateProduct=()=>{

    const history=useHistory()

    const [product,setProduct]=useState({
        title:"",
        description:"",
        price:" ",
        image:""
    })

    const AddProduct=(e,key)=>{

        setProduct(
            {...product,[key]:e.target.value}
        )

    }

    const AddRequest=()=>{

        axios.post('https://fakestoreapi.com/products',{

            title:product.name,
            description:product.description,
            price:product.price,
            image:product.image

        }).then(response=>{history.push('/product-list')})
    }
    console.log(product)

    return(
        <>
        
        <div>
            <div>
                <p>Product Name</p>
                <input value={product.title} onChange={(e)=>{AddProduct(e,'name')}}/>
            </div>
            <div>
                <p>Product Decription</p>
                <input value={product.description} onChange={(e)=>{AddProduct(e,'description')}}/>
            </div>
            <div>
                <p>Product Price</p>
                <input value={product.price} onChange={(e)=>{AddProduct(e,'price')}}/>
            </div>
            <div>
                <p>Product Category</p>
                <input value={product.image} onChange={(e)=>{AddProduct(e,'image')}}/>
            </div>

            <button onClick={AddRequest}>Submit</button>
     
     

     
     

        </div>
       

        </>
    )
       
    


}

export default CreateProduct