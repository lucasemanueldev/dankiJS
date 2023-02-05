/*
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
    <h1>Meu App</h1>
    <Header />
    </div>
  );
}
*/

import React, { useState, useEffect } from 'react';



function App() {
  /*
  // Declare uma nova variável de state, a qual chamaremos de "count"

  const [count, setCount] = useState(0);

  useEffect(())

  return (

    <div>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>

        Click me

      </button>

    </div>

  );
  */
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );

}

export default App;
