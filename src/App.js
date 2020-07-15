import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Group from './Group';
import Dnd from './images/dnd.png';
import Test from './images/background.jpg';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img id="profile" src="images/profile.jpg" alt=""></img>
        <div className="App-welcome">
          <h2 id="name"> Victor Chen </h2> 
        </div>
      </header>
      <p id="aboutme">
        Hi! I'm Victor, a Computer Science student at the University of Richmond, and an aspiring Full-Stack Web Developer. 
        I enjoy building software to help others and learning new technologies along the way. 
        Check out some of my recent projects below!
      </p>
      <div id="projects">
        <Group srcs={[Dnd,Test]}/>
      </div>
    </div>
  );
}

export default App;
