import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import Header from '../Header';

const Categories = () => {
  const status = useSelector((state) => state.checkStatus);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div>
        <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
        <p>{status}</p>
      </div>
    </>
  );
};

export default Categories;
