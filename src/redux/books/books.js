import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [{
  id: uuidv4,
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  category: 'Action',
  progress: 64,
  currentChapter: 17,
},
{
  id: uuidv4,
  title: 'Dune',
  author: 'Frank Herbert',
  category: 'Science Fiction',
  progress: 8,
  currentChapter: 3,
},
{
  id: uuidv4,
  title: 'Capital in the Twenty-First century',
  author: 'Suzanne Collins',
  category: 'Economy',
  progress: 0,
  currentChapter: 'introduction',
},
];

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: {
      id: uuidv4,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
      progress: 0,
      currentChapter: 0,
    },
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: {
      bookid: id,
    },
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return [state.filter((book) => book.id !== action.payload.id)];

    default:
      return state;
  }
}

export default reducer;
