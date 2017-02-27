import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
  // this reducer is going to add a key to our global application state called "books",
  // where the key is "books" and the value is whatever gets returned by the book reducer
  // which in this case, is our array of books
});

export default rootReducer;
