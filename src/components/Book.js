import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import CircularProgress from './circuralProgres';

const Book = ({
  id, title, author, category, currentChapter, progress,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="container">
      <div className="left-container">
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <p className="author">{author}</p>
        <div className="nav-tabs">
          <div className="btn-com">
            <button className="ulbutton1" type="button">Comment</button>
          </div>
          <div className="btn-com">
            <button className="ulbutton1" type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          </div>
          <div>
            <button className="ulbutton" type="button">Edit</button>
          </div>

        </div>
      </div>
      <div className="second-container">
        <CircularProgress />
        <div>
          <p className="text-center">{`${progress}%`}</p>
          <span className="progress-bar">Completed</span>
        </div>
      </div>
      <div className="last-container">
        <span className="chapter">Current Chapter</span>
        <h4>{currentChapter}</h4>
        <button className="update" type="button">UPDATE PROGRESS</button>
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
