import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gabriel Bianchet Tavares, Software Engineer, 2022
        </p>
        <a
          className="App-link"
          href="https://linkedin.com/in/gabrielbianchettavares"
          target="_blank"
          rel="noopener noreferrer"
        >
          About me
        </a>
      </header>
    </div>
  );
}

export default App;
