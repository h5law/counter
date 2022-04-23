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

  const cardWidth = {
    width: `${((counter.title.length + 2) * 24)}px`
  };

  return (
    <div
      className="counter"
      style={cardWidth}
    >
      <div className="counter-top">
        <input
          type="text"
          name="counter-title"
          value={counter.title}
          onChange={handleTitleChange}
        />
        <button
          aria-label="Remove counter"
          onClick={() => dispatch(removeCounter(counter))}
        >
          &times;
        </button>
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
        className="counter-reset"
        aria-label="Reset"
        onClick={() => dispatch(resetCounter(counter))}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
