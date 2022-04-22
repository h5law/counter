import React from 'react';

import {
  removeCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
  changeTitle } from './counterSlice';

import './Counters.css';

const Counter = ({counter, dispatch}) => {
  const handleTitleChange = ({target}) => {
    dispatch(changeTitle({...counter, title: target.value}));
  };

  const newTitleWidth = {
    width: `${(counter.title.length + 3) * 12}px`
  };

  return (
    <div className="counter">
      <div className="counter-top">
        <div className="counter-title">
          <input
            type="text"
            name="counter-title"
            value={counter.title}
            style={newTitleWidth}
            onChange={handleTitleChange}
          />
        </div>
        <div className="counter-remove">
          <button
            aria-label="Remove counter"
            onClick={() => dispatch(removeCounter(counter))}
          >
            &times;
          </button>
        </div>
      </div>
      <div className="counter-details">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter(counter))}
        >
          -
        </button>
        <span>{counter.value}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementCounter(counter))}
        >
          +
        </button>
      </div>
      <button
        aria-label="Reset counter"
        onClick={() => dispatch(resetCounter(counter))}
      >
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;
