import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export default function Form() {
  const itemId = uuidv4();
  const dispatch = useDispatch();
  const [bookBook, setBook] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookCategory, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!bookBook.trim() || !bookAuthor.trim()) return;
    const newBook = {
      item_Id: itemId,
      title: bookBook,
      author: bookAuthor,
      category: bookCategory,
    };

    dispatch(addBook(newBook));
    setBook('');
    setAuthor('');
    setCategory('');
  };
  return (
    <div className="form-group">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form className="form-body" onSubmit={handleSubmit}>
        <input type="text" name="autor" placeholder="Autor" onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" name="book" placeholder="Book" onChange={(e) => setBook(e.target.value)} />
        <button className="submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
