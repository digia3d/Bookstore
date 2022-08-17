import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook } from '../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  const [bookBook, setBook] = useState('');
  const [bookAuthor, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookBook === '' || bookAuthor === '') return;
    const newBook = {
      title: bookBook,
      author: bookAuthor,
    };

    dispatch(addBook(newBook));
    setBook('');
    setAuthor('');
  };
  return (
    <div>
      <form className="form-body" onSubmit={handleSubmit}>
        <input type="text" name="autor" placeholder="Autor" onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" name="book" placeholder="Book" onChange={(e) => setBook(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
