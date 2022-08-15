import { configureStore, combineReducers } from '@reduxjs/toolkit';

import booksReducer from './books/books';
import bookStat from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: bookStat,
});

const Store = configureStore({ reducer: rootReducer });

export default Store;
