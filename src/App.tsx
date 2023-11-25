import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Sum (props) {
  const [val, setVal] = useState (props.a + props.e)
  function onClick() {
    setVal (val + 1)
  }
    return (
      <p onClick={onClick}>{val}</p>
    )
  }

function App() {
  const [a, setA] = useState( ); //Gia tri cua A
  const [b, setB] = useState( ); //Gia tri cua B
  const [sum, setSum] = useState(0); //Tong cua gia tri A va B

  const handleAChange = (event) => {
    setA(parseInt(event.target.value) || 0);
  };

  const handleBChange = (event) => {
    setB(parseInt(event.target.value) || 0);
  };

  const calculateSum = () => {
    setSum(a + b);
  };

  return (
    <div className="App">
      <p>
      <Sum a={0} e={1} />
      </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <label htmlFor="inputA">Enter a:</label>
          <input
            id="inputA"
            type="number"
            value={a}
            onChange={handleAChange}
          />
        </div>
        <div>
          <label htmlFor="inputB">Enter b:</label>
          <input
            id="inputB"
            type="number"
            value={b}
            onChange={handleBChange}
          />
        </div>
        <button type="button" onClick={calculateSum}>
          Calculate Sum
        </button>
        <p>Sum is: {sum}</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;