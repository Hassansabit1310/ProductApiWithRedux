const initialState={
    currentProduct:null

}

const productDetailsReducer=(state=initialState,action)=>{

    if(action.type==='Update_Product_Details')
    {
        return {...state, currentProduct:action.payload}
    }
    else 
    {
        return state
    }

};
export default productDetailsReducer