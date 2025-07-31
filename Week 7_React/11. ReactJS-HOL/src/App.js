import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  // Function 1a: Increment
  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  // Function 1b: Say Hello (called when Increment is clicked)
  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  // Function 2: Welcome message with argument
  const sayWelcome = (message) => {
    alert(`Hello! ${message}`);
  };

  // Function 3: Synthetic event
  const handleClick = () => {
    alert('I was clicked');
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
      <button onClick={() => sayWelcome('Member1')}>Say welcome</button>
      <br />
      <br />
      <button onClick={handleClick}>Click on me</button>
      <br />
      <br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
