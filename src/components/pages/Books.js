import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../Form';
import Book from '../Book';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <section className="mein-container">
        <div className="data">
          {
            books.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                currentChapter="Chapter 15"
                category="Action"
                progress={17}
              />
            ))
          }
        </div>
      </section>
      <Form />
    </>
  );
}

export default Books;
