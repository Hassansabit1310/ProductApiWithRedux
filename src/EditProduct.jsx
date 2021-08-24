import { Store, Update } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useSelector } from 'react-redux'

import './App.css'

const EditProducts=()=>{
    const {currentProduct}=useSelector(store=>store.detailsStore)



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
    <div>



    

    {loading? <BounceLoader loading={loading}/>:
    <><Grid container spacing={3}>

        


    
    <Grid item xs={12} sm={6}>
    <p>Product Name</p>
    <input defaultValue={currentProduct.title}  value={currentProduct.title} onChange={(e)=>{UpdateProduct(e,'title')}}/>
     </Grid>

    <Grid item xs={12} sm={6}>
    <p>Product Decription</p>
    <input defaultValue={currentProduct.description} value={currentProduct.description} onChange={(e)=>{UpdateProduct(e,'description')}}/>
      </Grid>

    

    <Grid item xs={12} sm={6}>
    <p>Product Price</p>
    <input defaultValue={currentProduct.price} value={currentProduct.price} onChange={(e)=>{UpdateProduct(e,'price')}}/>
     
    </Grid>

    <Grid item xs={12} sm={6}>
    <p>Product Category</p>
    <input defaultValue={currentProduct.image} value={currentProduct.image} onChange={(e)=>{UpdateProduct(e,'image')}}/>
    </Grid>

    </Grid>

<Button onClick={UpdateRequest}>Submit</Button>
     
    </>}
           
     

     
     



    

    

       
  
    </div>
    )

}

export default EditProducts