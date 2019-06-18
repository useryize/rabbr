import { combineReducers } from 'redux';
import entities from './entities';
import home from './home';
import app from './app';

const rootReducer = combineReducers({
    entities,
    home,
    app
});

export default rootReducer;