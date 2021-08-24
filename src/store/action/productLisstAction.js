import { ActionTypes } from "../ActionType"
import axios from 'axios'

const setProductList=(productList)=>(  {type:ActionTypes.Update_Product_List,payload: productList })

export const requestProductList=()=>{
    return async (dispatch)=>{

        const response=await axios.get('https://fakestoreapi.com/products');
        dispatch(setProductList(response.data))

    }
}

export default setProductList