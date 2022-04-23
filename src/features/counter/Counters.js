import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'

import Counter from './Counter.js';
import { addCounter } from './counterSlice.js';

const Counters = () => {
  const store = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const handleChange = ({target}) => {
    setTitle(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCounter({
      title,
      id: nanoid(),
      value: 0
    }));
    setTitle('')
  };

  return (
    <div>
      <form
        className="input-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="new-title"
          value={title}
          onChange={handleChange}
          placeholder="Enter counter title"
          required
        />
        <input type="submit" value="+" />
      </form>
      <div className="counters-containers">
        {(store.counters.length > 0) && store.counters.map(obj => (
          <Counter
            key={obj.id}
            counter={obj}
            dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Counters;
