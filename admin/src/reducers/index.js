import {combineReducers} from 'redux';
import HttpReducer from './HttpReducer';
import HelperReducer from './HelperReducer';
import {reducer as form} from 'redux-form';

export default combineReducers({HttpReducer,HelperReducer,form})