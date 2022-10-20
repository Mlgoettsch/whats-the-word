import './App.css';
import { useState, useEffect } from 'react';
import { wordList } from './wordList';
import Row from './components/Row';
import Box from './components/Box';

function App() {

  const randomNum = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomNum]
  const [ submittedGuesses, addGuess ] = useState([]);
  const [ pendingGuess, updatePendingGuess ] = useState('');
  
  const keyDownHandler = (event) => {
    console.log(event.key)
    if (event.key === 'Enter' && pendingGuess.length === 5 && wordList.indexOf(pendingGuess.toLowerCase()) > -1) {
      addGuess(current => [...current, pendingGuess])
      updatePendingGuess('');
    };
    if (event.key === 'Backspace') {
      updatePendingGuess(pendingGuess.slice(0, -1))
    };

    if ((/[a-zA-Z]/).test(event.key) && pendingGuess.length < 5 && event.key.length === 1) {
      updatePendingGuess(pendingGuess + event.key.toUpperCase())
    };
  };


  // https://bobbyhadz.com/blog/react-detect-enter-key-press
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  console.log(submittedGuesses)
  return (
    <>
      <div className="App">
        What's the word? {randomWord}
        <br/>
        {submittedGuesses.map((guess, id) => (
          <Row guess={ guess } key={ id }/>
        ))}
        <Row guess={ pendingGuess } /> 
      </div>
      <button className='enter-button'>
        Enter
      </button>
      <button className='delete-button'>
        Delete
      </button>
    </> 
  );
}

export default App;
