import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="homeText">
          Hi there, I am Makrine!
        </p>
        <a
          className="myFacebook"
          href="https://facebook.com/m.tskipurishvili"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
