import { combineReducers } from 'redux';

import tour from './tourReducer'

const allReducers = combineReducers({
    tour: tour 
});

export default allReducers;