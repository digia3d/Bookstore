const ADD_BOOK = 'bookStore/books/addBook';
const REMOVE_BOOK = 'bookStore/books/removeBook';

const initialState = {
  books: [],
};

export function addBook(books) {
  return {
    type: ADD_BOOK,
    books,
  };
}

export function removeBook(books) {
  return {
    type: REMOVE_BOOK,
    books,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
    default: return state.books;
  }
}

export default reducer;
