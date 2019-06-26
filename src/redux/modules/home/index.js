import { combineReducers } from 'redux';
import home from './home';
import homeCategory from './homeCategory';
const rootReducer = combineReducers({
    home,
    homeCategory
});
export default rootReducer;