import {combineReducers} from 'redux';
import NavListReducer from './reducer-navlist.jsx';

const allReducers = combineReducers({
    navList : NavListReducer
});

export default allReducers;