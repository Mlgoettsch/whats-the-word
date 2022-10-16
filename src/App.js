import './App.css';
import { wordList } from './wordList';
import Row from './components/Row';

function App() {

  const randomNum = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomNum]

  return (
    <div className="App">
      What's the word? {randomWord}
      <Row guess='house'/>
    </div>
  );
}

export default App;
