import React from 'react';
import './App.css';
import CounterComponent from './component/CounterComponent';

export const sum = (value1: number, value2: number) => value1 + value2; 

function App() {

  const handleCounterChange = (count: number) => {

  }
  return (
    <div className="App">
      <header className="App-header">
        <CounterComponent onCountChange={handleCounterChange} />
      </header>
    </div>
  );
}

export default App;
