import { combineReducers } from 'redux';
import entities from './entities';
import homeModules from './home';
import app from './app';

const rootReducer = combineReducers({
    entities,
    homeModules,
    app
});

export default rootReducer;