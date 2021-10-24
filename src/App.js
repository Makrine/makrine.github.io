import pic from './MakrineIco.png';
import './App.css';
import React, { Component } from 'react';
import { GitHub } from 'react-feather';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';
import Typist from "react-typist";

 
class App extends Component {

  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="makrinePic" alt="MakrinePic" />
        <p id="homeText">
          <Typist
          cursor={{ show: true, hideWhenDone: true, hideWhenDoneDelay: 400 }}
          >
          Hi there, I am Makrine!
          <Typist.Delay ms={700} />
          <br/><br/>
          I can code.
          </Typist>
        </p>
        <div className="socialIcons">
          <a
            id="GitHub"
            className="social-icons"
            href="https://github.com/Makrine"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.matches && (<GitHub color="white" size={24} />)}
            {!this.state.matches && (<GitHub color="white" size={18} />)}
          </a>
          <a
            id="Facebook"
            className="social-icons"
            href="https://facebook.com/m.tskipurishvili"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.matches && (<Facebook color="white" size={24} />)}
            {!this.state.matches && (<Facebook color="white" size={18} />)}
          </a>
          <a
            id="Instagram"
            className="social-icons"
            href="https://www.instagram.com/makrine.tskipurishvili/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.matches && (<Instagram color="white" size={24} />)}
            {!this.state.matches && (<Instagram color="white" size={18} />)}
            </a>
          <a
            id="Gmail"
            className="social-icons"
            href="mailto:tskipurishvilimakrina@gmail.com?subject=Hey! Let's talk!"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.matches && (<Mail color="white" size={24} />)}
            {!this.state.matches && (<Mail color="white" size={18} />)}
          </a> 
        </div>
</header>
    </div>
  );
}
}

export default App;
