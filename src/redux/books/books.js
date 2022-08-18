/* eslint-disable camelcase */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/alms293dJxSdOD0eklKU/books';

const initialState = [];

function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
}

function removeBook(item_id) {
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

const deleteBook = (id) => async (dispatch) => {
  await axios.delete(API_URL, { params: { id } }).then(() => dispatch(fetchBook()));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const books = Object.entries(action.payload);
      return books.map((book) => ({
        ...book[1][0],
        id: book[0],
      }));
    }
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.bookid)];

    default:
      return state;
  }
};

export default reducer;

export {
  fetchBook,
  postBook,
  deleteBook,
  addBook,
  removeBook,
};
