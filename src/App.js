import icon2D from './assets/MakrineIco.png';
import realPic from './assets/makrine.jpg';
import './App.css';
import React, { Component } from 'react';
import { GitHub } from 'react-feather';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';
import Typist from "react-typist";
import ScrollToTop from "./ScrollToTop.js" 
import { Link } from 'react-scroll';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = { 
      matches: window.matchMedia("(min-width: 768px)").matches
   };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  
  render() {
    
    
  return (
    
    <div className="App" id="top">
      <header className="App-header">
        <img 
          src={this.picClicked?realPic:icon2D}
          className="makrinePic"
          alt="MakrinePic" 
        />
        <p id="homeText">
          <Typist
          cursor={{ show: true, hideWhenDone: true, hideWhenDoneDelay: 400 }}
          >
          Hi there, I am Makrine!
          </Typist>
          {/* <Typist
          cursor={{ show: false}}
          >
          <Typist.Delay ms={2000} />
          <br/>
          I can code. 
          </Typist> */}
        </p>
        
<div className="wrapper">
  
    <Link
       to='whatIDo'
       className='menu'
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}>
         <span>What I Do</span>
       </Link>
       
       <Link
       to='education'
       className='menu'
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}>
         <span>Education</span>
        </Link>

      <Link
       to='hobbies'
       className='menu'
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}>
         <span>Hobbies</span>
      </Link>
      <Link
       to='contact'
       className='menu'
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}>
         <span>Contact</span>
         </Link>
</div>

       


</header>
<body>

       
       
<div class="content-container">
  
  <div class="box">
    <div class="content" id="whatIDo">
      <h2>What I do</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
    </div>
  </div>
  
    <div class="box">
      <div class="content" id="education">
    <h2>Education</h2>
    <div class="timeline">
      <div class="container left">
        <div class="content">
          <h2>2017</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>2016</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  
    <div class="box">
      <div class="content" id="hobbies">
        <h2>Hobbies</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsa dolor veritatis quaerat. Amet cum est illo consequuntur exercitationem! A culpa placeat similique iure vero consectetur eos maxime necessitatibus sapiente!</p>
      </div>
  </div>

  <div class="box">
      <div class="content" id="contact">
        <h2>Contact</h2>
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
        
      </div>
  </div>
  
      </div>



</body>

<ScrollToTop/> 
<footer><span className="rights">© 2021 all rights reserved. </span></footer>
    </div>
  );
}
}

export default App;
