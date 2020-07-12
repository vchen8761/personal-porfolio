import React from 'react';
import './App.css';
// import FontAwesome from 'react-fontawesome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="profile" src="images/profile.jpg" alt=""></img>
        <div className="App-welcome">
          <h2 id="name"> Victor Chen </h2> 
        </div>
      </header>
      <p id="aboutme">
        Hi! I'm Victor, a Computer Science student at the University of Richmond, and an aspiring Full-Stack Web Developer. 
        I enjoy building software to help others and learning new technologies along the way. 
        Here are some of my recent projects!
      </p>
    </div>
  );
}

export default App;
