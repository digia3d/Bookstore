/* eslint-disable camelcase */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/alms293dJxSdOD0eklKU/books';

const initialState = [];

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: {
      id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
      progress: 0,
      currentChapter: 0,
    },
  };
}

export function removeBook(item_id) {
  return {
    type: REMOVE_BOOK,
    payload: {
      bookid: item_id,
    },
  };
}

const fetchBook = () => async (dispatch) => {
  await axios.getBook(API_URL).then((response) => dispatch(addBook(response.data)));
};

const postBook = (addBook) => async (dispatch) => {
  await axios.post(API_URL, addBook).then(() => dispatch(fetchBook()));
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.bookid)];

    default:
      return state;
  }
}

export default reducer;
