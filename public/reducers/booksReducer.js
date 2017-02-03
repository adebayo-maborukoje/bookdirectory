// import the actions;
import * as types from '../actions/actionsTypes';
import initState from './initState';

export default function bookReducer(state=initState.books, action) {
  switch(action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    default:
    return state;
  }
}