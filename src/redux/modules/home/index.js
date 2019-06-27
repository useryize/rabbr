import { combineReducers } from 'redux';
import home from './home';
import homeCategory from './homeCategory';
import homeHeadLine from './homeHeadLine';
import homeDiscount from './homeDiscount';
import homeLikeList from './homeLikeList';
const rootReducer = combineReducers({
    home,
    homeCategory, // 导航
    homeHeadLine, // 点评头条
    homeDiscount, // 超值优惠
    homeLikeList, // 猜你喜欢
});
export default rootReducer;