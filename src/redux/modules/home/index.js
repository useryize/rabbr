import { combineReducers } from 'redux';
import home from './home';
import homeCategory from './homeCategory';
import homeHeadLine from './homeHeadLine';
const rootReducer = combineReducers({
    home,
    homeCategory,
    homeHeadLine
});
export default rootReducer;