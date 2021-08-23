const initialState={
    productList:[]

}

const productListReducer=(state=initialState,action)=>{

    if(action.type==='Update_Product_List')
    {
        return {...state, productList: action.payload}
    }
    else 
    {
        return state
    }

};
export default productListReducer