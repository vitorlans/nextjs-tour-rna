import {FETCHING_TOURS, FETCHING_TOURS_SUCCESS, FETCHING_TOURS_FAILURE} from '../actions/tourAction'

const initialState = {
  tours: [],
  isFetching: false,
  error: false
};

export default function(state = initialState, action){

    switch(action.type){

        case FETCHING_TOURS:
            return {
                ...state,
                tours: [],
                isFetching: true
            }
        case FETCHING_TOURS_SUCCESS:
            return {
                ...state,
                tours: action.payload,
                isFetching: false
            }
        case FETCHING_TOURS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return state;
    }

}