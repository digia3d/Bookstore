import React from 'react';

import Form from '../Form';
import Book from '../Book';

function Books() {
  return (
    <>
      <h2>Books</h2>
      <section className="container">
        <div>
          <Book />
        </div>
      </section>
      <Form />
    </>
  );
}

export default Books;
