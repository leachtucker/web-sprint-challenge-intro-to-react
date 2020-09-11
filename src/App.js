import React, {useEffect, useState} from 'react';
import fetchCharacters from './data/fetch.js';
import Character from './components/Character.js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    const changePage = (page) => {
      fetchCharacters(page, setCharacters);
    }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  if (!characters) {
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        <div className="container">
          <h2>LOADING...</h2>
        </div>
    </div>
    );
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="nav">
        <TextField id="page-input" label="Page" variant="outlined" color="primary" />
        <Button variant="contained" color="primary" onClick={changePage(document.querySelector('#page-input'))}>Go</Button>
      </div>
      <Grid container className="container">
        {characters.map(charr => {
          return (
            <Character props={charr} key={charr.id} />
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
