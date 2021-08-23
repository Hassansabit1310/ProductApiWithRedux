import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {BounceLoader} from 'react-spinners'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux'
import setProductList from './store/action/productLisstAction'
import { useSelector } from 'react-redux'


import Button from '@material-ui/core/Button'
import './App.css'





const ProductList=()=>{

    const {productList}=useSelector(store=>store.listStore)

    const history=useHistory()
    const dispatch=useDispatch()

    const [loading,setLoading]=useState(true)

    const [product,setProduct]=useState([])

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

      const classes = useStyles();

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(response=>{setProduct(response.data);dispatch(setProductList(response.data))}).then(() => {
            setLoading(false)
               
           }).catch(error=>{console.log(error)})
    },[])
    console.log(product)
    const SeeDetails=(id)=>{

        history.push(`/product-details/${id}`)

    }

    

    return(
        <>
        
        <Grid container spacing={3} justifyContent={'center'} >
            <BounceLoader loading={loading}/>
       
       {productList.map((product,index)=>{

           return<>
           <Grid item xs={3}>
           <Paper className={classes.paper}>
               <Grid container justifyContent={'center'}>
               <p key={index}> {product.title}</p>
           <img src={product.image} style={{width:'60%'}}/>

               </Grid>
               <Grid item xs={12}>

               <Button variant="contained" color="primary" href="#contained-buttons" onClick={()=>{SeeDetails(product.id)}}>see details</Button>

         

               </Grid>

          

           
           
          
          




           </Paper>
           
           

         
          </Grid>
        

           
           
           
           </>
           
           
           


})}


        </Grid>
       

        </>
    )
       
    


}

export default ProductList