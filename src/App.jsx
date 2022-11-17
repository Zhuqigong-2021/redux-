import { useState, useEffect } from 'react';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './redux/ducks/userSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser({ id: 1, name: 'change' }));
  }, [dispatch]);

  // const user = useSelector((state) => state.user.user);
  const user = useSelector((state) => state.user);
  // const user = useSelector((state) => console.log(state));
  const count = useSelector((state) => state.counter.count);
  const voters = ['Phil', 'Tom', 'Bob'];
  return (
    <div className="App">
      {user && (
        <h1>
          Hello, {user.firstName} {user.name}
        </h1>
      )}
      <h2>The Total Votes:{count} </h2>
      {voters.map((voter, i) => (
        <Counter key={i} voter={voter} />
      ))}
    </div>
  );
}
export default App;
