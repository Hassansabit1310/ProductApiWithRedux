import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import EditProducts from './EditProduct'
import {BounceLoader} from 'react-spinners'

import { useDispatch } from 'react-redux'
import setProductDetails from './store/action/productDetailsAction'



const ProductDetails=()=>{

    const {id}=useParams()
    const history=useHistory()
    const dispatch=useDispatch()
    

    const [loading,setLoading]=useState(true)

    const [productDetails,setproductDetails]=useState()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response=>{setproductDetails(response.data);dispatch(setProductDetails(response.data)) }).then(()=>{setLoading(false)}).catch(error=>{console.log(error)})
    },[])
   console.log(productDetails);

   const DeleteDetails=()=>{
    history.push(`/delete-product/${id}`)

}

const EditDetails=(id)=>{
    history.push(`/edit-product/${id}`)
}
    

    return(
        <>
        
        <div>

            <BounceLoader loading={loading}/>

            

            <p>
                {productDetails && 
            <>
            <p>{productDetails.title}</p>
            <img src={productDetails.image} style={{width: '10%'}}/>
            <button onClick={()=>{DeleteDetails(productDetails.id)}}>Delete</button>
            <button onClick={()=>{EditDetails(productDetails.id)}}>Edit</button>
            
            
            </>}
            
            </p>
      

        </div>
       

        </>
    )
       
    


}

export default ProductDetails