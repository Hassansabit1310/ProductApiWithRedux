import React from 'react'

import ProductList from './ProductList'

import { Grid } from '@material-ui/core'

import { Link, Route,Switch,Redirect } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import DeleteProducts from './DeleteProduct'
import CreateProduct from './CreateProduct'
import EditProducts from './EditProduct'





const App=()=>{
  return(
    <>
    <Link to='/add-product'>Add Product</Link>
  <Link to='/product-details'></Link>
  <Link to='/product-list'></Link>
  <Link to='/edit-product/:id'>Edit</Link>
  
    
    <Grid container justifyContent={'center'}>

    <Switch>
        <Route exact path='/edit-product/:id'>
          <EditProducts/>
        </Route>
        <Route exact path='/add-product'>
          <CreateProduct/>
        </Route>
        <Route exact path='/delete-product/:id'>
          <DeleteProducts/>
        </Route>

        <Route exact path='/product-details/:id'>

          <ProductDetails/>

        </Route>

        <Route exact path='/product-list'>

        <ProductList/>

        </Route>

        <Route path='*'>
          <p>404</p>
          </Route>

      </Switch>

    

  
     
      <Redirect to='/product-list'/>

    

    </Grid>

  

   
   


    

    </>
  )

}

export default App
