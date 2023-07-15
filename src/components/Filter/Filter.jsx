import React from 'react';
import { nanoid } from 'nanoid';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filter-selector';
import { filterContactAction } from 'redux/filter/filter-slice';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
 const  dispatch = useDispatch()
  const filterInputId = nanoid(4);
  return (
    <div>
      <label htmlFor={filterInputId} className={css.formLabel}>Find contacts by name</label>
      <input
        className={css.formInput}
        type="text"
        name="filter"
        id={filterInputId}
        value={filterValue}
        onChange={(e)=> dispatch(filterContactAction(e.target.value))}
      />
    </div>
  );
};



export default Filter;