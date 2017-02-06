import * as types from '../actions/actionTypes';
import initState from './initState';
export default function bookReducer(state = initState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    case types.CREATE_BOOK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    case types.UPDATE_BOOK_SUCCESS:
      return [
        ...state.filter(book => book.id !== action.book.id),
        Object.assign({}, action.book)
      ];
    default: 
      return state;
  }
}
