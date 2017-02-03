import * as types  from './actionsTypes';
import bookApi from '../api/BookApi';

export function loadBookSuccess(books) {
  return {type: types.LOAD_BOOKS_SUCCESS, books}
}

export function loadBooks() {
  return function(dispatch) {
    return bookApi.getAllBooks().then(books => {
      dispatch(loadBookSuccess(books));
    })
    .catch(error => {
      throw(error);
    });
  };
}