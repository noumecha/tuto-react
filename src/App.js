import logo from './logo.svg';
import './App.css';
import {Clock} from './Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
      </header>
    </div>
  );
}

export default App;
