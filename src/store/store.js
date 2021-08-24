import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancer=composeWithDevTools(applyMiddleware(thunk))


export const store=createStore(mainReducer, composeEnhancer)

