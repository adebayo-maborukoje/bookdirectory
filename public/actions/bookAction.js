import * as types from './actionTypes';
import bookApi from '../api/bookApi';

export function loadBookSuccess(books) {
  return {type: types.LOAD_BOOKS_SUCCESS, books};
}

export function updateBookSuccess(book) {
  return {type: types.UPDATE_BOOK_SUCCESS, book};
}

export function createBookSuccess(book) {
  return {type: types.CREATE_BOOK_SUCCESS, book};
}

export function loadBooks() {
  return function(dispatch) {
    return bookApi.getAllBooks().then(books => {
      dispatch(loadBookSuccess(books));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveBook(book) {
  return function (dispatch, getState) {
    return bookApi.saveBook(book)
      .then(savedBook => {
        book.id ? dispatch(updateBookSuccess(savedBook)) :
        dispatch(createBookSuccess(savedBook));
      })
      .catch(error => {
        throw error;
      });
  };
}