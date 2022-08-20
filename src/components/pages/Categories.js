import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <div className="check-stat">
        <button className="stat" type="button" onClick={handleCheck}>Check status</button>
        <p className="status">{status}</p>
      </div>
    </>
  );
};

export default Categories;
