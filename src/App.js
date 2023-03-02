import icon2D from './assets/MakrineIco.png';
import realPic from './assets/makrine.jpg';
import './App.css';
import './TimelineStyle.css';
import './Hobbies.css';
import React, { Component } from 'react';
import { GitHub, Linkedin } from 'react-feather';
import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';
import Typist from "react-typist";
import ScrollToTop from "./ScrollToTop.js" 
import { Link } from 'react-scroll';
import Education from './Education';
import Hobbies from './Hobbies';
import WorkExperience from './WorkExp';
import Languages from './Languages';
import "./Languages.css"
import "./CurrentProjects.css"
import cdf1 from './assets/CatchDatFish/1.jpg'
import cdf2 from './assets/CatchDatFish/2.jpg'
import cdf3 from './assets/CatchDatFish/3.jpg'
import cdf4 from './assets/CatchDatFish/4.jpg'
import cdf5 from './assets/CatchDatFish/5.jpg'
import cdf6 from './assets/CatchDatFish/6.jpg'
import vaska1 from './assets/Vaska.png'
import vaska2 from './assets/Vaska2.png'

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
       to='workExperience'
       className='menu'
       id="workXPMenu"
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}>
         <span>Work Experience</span>
       </Link>
       
       <Link
       to='languages'
       className='menu'
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}>
         <span>Languages</span>
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
      <p>I am a Game Developer working in Unity.</p>
      <h3>My Current Personal Projects:</h3>
      <h3><a href="catchDatFish">Catch Dat Fish</a></h3>
      <p>Catch Dat Fish is a mobile game where you play as a cat, catch fish, earn points, buy accessories and compete with your friends. The game uses Firebase SDK, is made in Unity and programmed in C#.</p>
      <div class="img_container">
        <img src={cdf1} class="img_item"></img>
        <img src={cdf2} class="img_item"></img>
        <img src={cdf3} class="img_item"></img>
        <img src={cdf4} class="img_item"></img>
        <img src={cdf5} class="img_item"></img>
        <img src={cdf6} class="img_item"></img>
      </div>
      
      <h3><a href="vaskaGoesTravelling">Vaska Goes Travelling</a></h3>
      <p>I have just recently started working on this game. It is targeted for PC and is based on my stuffed toy story.
        I had a stuffed called Vaska that I took everywhere I went and took pictures of it as if he was the one that was travelling. However, I lost him in Germany in Feburary, 2023 so I had an idea to create this game. The game starts at a train station where he gets lost and realised that from now on he is free to go anywhre he wants and do anything he wants so he goes travelling. You as a player are free to choose where you can go. And wherever you go, you can take selfies and do stuff.
      </p>
      <div class="img_container">
        <img src={vaska2} class="img_item"></img>
        <img src={vaska1} class="img_item"></img>
      </div>
      </div>
  </div>

  <div class="box">
    <div class="content" id="workExperience">
      <h2>Work Experience</h2>
      <WorkExperience/>
      </div>
  </div>

  <div class="box">
    <div class="content" id="languages">
      <h2>Languages</h2>
      <Languages/>
      </div>
  </div>
  
    <div class="box">
      <div class="content" id="education">
    <h2>Education</h2>

<Education/>

    </div>
  </div>
  
    <div class="box">
      <div class="content" id="hobbies">
        <h2>Hobbies</h2>
        <Hobbies/>
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
            id="LinkedIn"
            className="social-icons"
            href="https://linkedin.com/in/makrina-tskipurishvili-9b0407236"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.matches && (<Linkedin color="white" size={24} />)}
            {!this.state.matches && (<Linkedin color="white" size={18} />)}
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
<footer><span className="rights">© 2023 all rights reserved. </span></footer>
    </div>
  );
}
}

export default App;
