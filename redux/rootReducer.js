import { combineReducers } from 'redux';

import ProductReducer from './products/productsReducer';
import cartRedeucer from './cart/cartReducer';
const rootReducer = combineReducers({
    productsState: ProductReducer,
    cartState: cartRedeucer
})
 


export default rootReducer;