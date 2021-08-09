import { Update } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'

const EditProducts=()=>{

    const history=useHistory()

    const {id}=useParams()
    const [loading,setLoading]=useState(true)

    const [product,setProduct]=useState({
        title:"",
        description:"",
        price:" ",
        image:""
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
               
           }, 3000);
          


           
        
        },[]);

    const UpdateProduct=(e,key)=>{

        setProduct(
            {...product,[key]:e.target.value}
        )

    }
    const UpdateRequest=()=>{

        axios.put(`https://fakestoreapi.com/products/${id}`,{

            title:product.title,
            description:product.description,
            price:product.price,
            image:product.image

        }).then(()=>{history.push('/product-list')})
    }


    return(
    <>

<div>

    {loading? <BounceLoader loading={loading}/>:
    <>
     <div>
                
               
                <p>Product Name</p>
                <input defaultValue={product.title}  value={product.title} onChange={(e)=>{UpdateProduct(e,'title')}}/>
            </div>
            <div>
                <p>Product Decription</p>
                <input defaultValue={product.description} value={product.description} onChange={(e)=>{UpdateProduct(e,'description')}}/>
            </div>
            <div>
                <p>Product Price</p>
                <input defaultValue={product.price} value={product.price} onChange={(e)=>{UpdateProduct(e,'price')}}/>
            </div>
            <div>
                <p>Product Category</p>
                <input defaultValue={product.image} value={product.image} onChange={(e)=>{UpdateProduct(e,'image')}}/>
            </div>

            <button onClick={UpdateRequest}>Submit</button>
     
    </>}
           
     

     
     

        </div>
  
    </>
    )

}

export default EditProducts