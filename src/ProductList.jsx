import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {BounceLoader} from 'react-spinners'




const ProductList=()=>{

    const history=useHistory()

    const [loading,setLoading]=useState(true)

    const [product,setProduct]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(response=>{setProduct(response.data)}).then(() => {
            setLoading(false)
               
           }).catch(error=>{console.log(error)})
    },[])
    console.log(product)
    const SeeDetails=(id)=>{

        history.push(`/product-details/${id}`)

    }

    

    return(
        <>
        
        <div>
            <BounceLoader loading={loading}/>
       
       {product.map((product,index)=>{

           return<>
           

            <p key={index}> {product.title}</p>
            <img src={product.image} style={{width:'10%'}}/>
            <button onClick={()=>{SeeDetails(product.id)}}>see details</button>
            


           </>



})}


        </div>
       

        </>
    )
       
    


}

export default ProductList