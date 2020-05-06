import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onclick={onIncrease}>+1</button>
        <button onclick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
