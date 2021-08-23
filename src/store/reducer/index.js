import { combineReducers } from "redux";
import productDetailsReducer from "./productDetailsReducer";
import productListReducer from "./productListReducer";

const mainReducer=combineReducers({
    listStore:productListReducer,
    detailsStore:productDetailsReducer

})

export default mainReducer