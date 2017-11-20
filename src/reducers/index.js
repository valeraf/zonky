import { combineReducers } from 'redux';
import data from './loans';
import filters from './filters';

export default combineReducers({
    data,
    filters
});