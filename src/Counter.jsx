import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/ducks/counter';

const Counter = ({ voter }) => {
  const [votes, setVotes] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };
  return (
    <div className="card">
      <h3>{`Count:${votes}`}</h3>
      <h3>{voter}</h3>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
