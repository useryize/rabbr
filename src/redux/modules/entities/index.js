import { combineReducers } from 'redux';
import comments from './comments.js';
import orders from './orders.js';
import products from './products.js';
import shops from './shops.js';

// 合并领域状态

const rootReducer = combineReducers({
    comments,
    orders,
    products,
    shops
});

export default rootReducer;