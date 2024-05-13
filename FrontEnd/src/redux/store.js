import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { getProductDetailsReducer, getProductsReducers } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';

const reducer=combineReducers({
    getProducts:getProductsReducers,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducers,
})

const middleware =[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;