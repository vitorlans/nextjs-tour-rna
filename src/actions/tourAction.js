import apiService from '../api'
/*
 * action types
 */

export const FETCHING_TOURS = 'FETCHING_TOURS'
export const FETCHING_TOURS_SUCCESS = 'FETCHING_TOURS_SUCCESS'
export const FETCHING_TOURS_FAILURE = 'FETCHING_TOURS_FAILURE'


/*
 * action creators
 */

export function getTours() {
  return {
    type: FETCHING_TOURS
  }
}

export function getToursSuccess(data) {
  return {
    type: FETCHING_TOURS_SUCCESS,
    payload: data
  }
}

export function getToursFailure() {
  return {
    type: FETCHING_TOURS_FAILURE,
    payload: new Error,
    error: true
  }
}


export function fetchTours() {
  return (dispatch) => {
    dispatch(getTours())
    apiService.getTours().then(data => dispatch(getToursSuccess(data))).catch(error => dispatch(getToursFailure(error)))
  }
}
