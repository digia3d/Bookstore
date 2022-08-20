/* eslint-disable camelcase */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/alms293dJxSdOD0eklKU/books';

const initialState = [
  {
    item_id: 'mock-1',
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
];
let newBookID = 0;

function addBook({ title, author }) {
  newBookID += 1;
  return {
    type: ADD_BOOK,
    payload: {
      id: newBookID.toString(),
      title,
      author,
    },
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
  await axios.get(API_URL).then((response) => dispatch(addBook(response.data)));
};

const postBook = (addBook) => async (dispatch) => {
  await axios.post(API_URL, addBook).then(() => dispatch(fetchBook()));
};

const deleteBook = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`).then(() => dispatch(fetchBook()));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.bookid);
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
