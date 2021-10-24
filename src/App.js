import pic from './MakrineIco.png';
import './App.css';
import React from 'react';
import { GitHub } from 'react-feather';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="makrinePic" alt="MakrinePic" />
        <p id="homeText">
          Hi there, I am Makrine!
        </p>
        <div className="socialIcons">
          <a
            id="GitHub"
            className="social-icons"
            href="https://github.com/Makrine"
            target="_blank"
            rel="noopener noreferrer"
          ><GitHub color="white" size={24} /></a>
          <a
            id="Facebook"
            className="social-icons"
            href="https://facebook.com/m.tskipurishvili"
            target="_blank"
            rel="noopener noreferrer"
          ><Facebook color="white" size={24} /></a>
          <a
            id="Instagram"
            className="social-icons"
            href="https://www.instagram.com/makrine.tskipurishvili/"
            target="_blank"
            rel="noopener noreferrer"
          ><Instagram color="white" size={24} /></a>
          <a
            id="Gmail"
            className="social-icons"
            href="mailto:tskipurishvilimakrina@gmail.com?subject=Hey! Let's talk!"
            target="_blank"
            rel="noopener noreferrer"
          ><Mail color="white" size={24} /></a> 
        </div>
</header>
    </div>
  );
}

export default App;
