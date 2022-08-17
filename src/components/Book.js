import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, category, currentChapter, progress,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="container">
      <div className="left-container">
        <span>{category}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <ul>
          <li><button type="button">Comment</button></li>
          <li><button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="second-container">
        <h2>{`${progress}%`}</h2>
        <span>Completed</span>
      </div>
      <div className="last-container">
        <span>Current Chapter</span>
        <h3>{currentChapter}</h3>
        <button type="button">Update Progres</button>
      </div>
    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.string.isRequired,
};

export default Book;
