import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'



const DeleteProducts=()=>{

    const {id}=useParams()

    const history=useHistory()
    

    useEffect(()=>{
        axios.delete(`https://fakestoreapi.com/products/${id}`).then(history.push('/product-list')).catch(error=>{console.log(error)})
    },[])
  

    

    return(
        <>
        
        <div>
            <button onClick={()=>{}}></button>

            

           
      

        </div>
       

        </>
    )
       
    


}

export default DeleteProducts
