/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const FETCH_TOUR = 'FETCH_TOUR'

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}
