import React from 'react';

function Book() {
  return (
    <>
      <section className="container">
        <div className="left-container">
          <span>Science fiction</span>
          <h2>Dune</h2>
          <p>Frank Herbert</p>
          <ul>
            <li><button type="button">Comment</button></li>
            <li><button type="button">Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="second-container">
          <h2>8%</h2>
          <span>Completed</span>
        </div>
        <div className="last-container">
          <span>Current Chapter</span>
          <h3>Chapter 3: &quot;A Lesson Learned&quot; </h3>
          <button type="button">Update Progres</button>
        </div>
      </section>
    </>
  );
}

export default Book;
