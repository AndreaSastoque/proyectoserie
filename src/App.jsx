import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Texto desde el componante 
        </p>
        <span>nuevo texto</span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const App = () => <>
  <h1 className="tituloPrincipal">Nuevo Titulo</h1>
  <img src={logo} className="App-logo" alt="logo" />
  </>

export default App;
