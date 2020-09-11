import React, {useEffect, useState} from 'react';
import fetchCharacters from './data/fetch.js';
import Character from './components/Character.js';

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState();

  // Runs on the first mounting of the App component
  useEffect(
    () => {
      fetchCharacters(1, setCharacters);
    }, []);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
