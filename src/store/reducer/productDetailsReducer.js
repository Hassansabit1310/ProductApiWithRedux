import { ActionTypes } from "../ActionType"



const initialState={
    currentProduct:null

}

const productDetailsReducer=(state=initialState,action)=>{

   

    switch (action.type) {
        case ActionTypes.Update_Product_Details:
            return {...state, currentProduct:action.payload}
            
            
        default:
            return state
            break;
    }

};
export default productDetailsReducer