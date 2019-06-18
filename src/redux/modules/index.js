import { combineReducers } from 'redux';
import entities from './entities';
import home from './home';

const rootReducer = combineReducers({
    entities,
    home
});

export default rootReducer;