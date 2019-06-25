import { combineReducers } from 'redux';
import entities from './entities';
import home from './home';
import app from './app';
import homeCategory from './homeCategory';

const rootReducer = combineReducers({
    entities,
    home,
    app,
    homeCategory
});

export default rootReducer;