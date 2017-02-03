import {CombineReducers } from 'redux';
import books from 'booksReducer';


const RootReducer = combinerReducers({
  books,
});

export default RootReducer;