import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from './redux/CounterState';
import { IncrementAction, DecrementAction, ResetAction, AddCounterAction } from "./redux/ActionCreators";

export default ()=> {

  const [NewCounter, setNewCounter] = useState<number>(0);
  const counter = useSelector<Counter>(state => state.Counter)
  const dispatch = useDispatch();

  const handleIncrement =() => dispatch(IncrementAction())
  const handleDecrement = () => dispatch(DecrementAction())
  const handleReset = () => dispatch(ResetAction())
  const handleSubmitCounter= (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(AddCounterAction(NewCounter))
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmitCounter}>
          <input 
            value={NewCounter}
            onChange={(e) => setNewCounter(+e.target.value)}
          />
        </form>

        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleReset}>RESET</button>
      
      </header>
    </div>
  );
}


