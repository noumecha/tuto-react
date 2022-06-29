import logo from './logo.svg';
import './App.css';
//import {Clock} from './Clock'
//import {AppCompteur} from './Compteur'
//import {TodoList} from './Compteur'
//import { LayoutEffect } from './Button'
//import { ToolBar } from './ToolBar'
import { FormContext } from './FormContext'
import { Modal } from './Modal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormContext />
        <Modal />      
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          tuto-react-by-spaker
        </a>
      </header>
    </div>
  );
}

export default App;
