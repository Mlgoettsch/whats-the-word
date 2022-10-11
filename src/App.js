import './App.css';
import { wordList } from './wordList';

function App() {

  const randomNum = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomNum]

  return (
    <div className="App">
      Hello world {randomWord}
    </div>
  );
}

export default App;
