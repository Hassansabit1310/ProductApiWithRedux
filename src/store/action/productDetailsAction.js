import { ActionTypes } from "../ActionType"

const setProductDetails=(productDetails)=>(  {type:ActionTypes.Update_Product_Details,payload: productDetails })

export default setProductDetails