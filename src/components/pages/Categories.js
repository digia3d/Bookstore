import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.checkStatus);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
        <p>{status}</p>
      </div>
    </>
  );
}

export default Categories;
