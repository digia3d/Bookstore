import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import booksReducer from './books/books';
import bookStat from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: bookStat,
});

const Store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default Store;
