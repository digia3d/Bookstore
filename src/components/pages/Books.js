import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../Form';
import Book from '../Book';

function Books() {
  const data = useSelector((state) => state.books);
  return (
    <>
      <h2>Books</h2>
      <section className="container">
        <div className="data">
          {
            data.map((e) => (
              <Book
                key={e.id}
                id={e.id}
                title={e.title}
                author={e.author}
                currentChapter={e.currentChapter}
                category={e.category}
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
