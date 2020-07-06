import React from 'react';
import NavBar from './NavBar';
import './App.css';
import FontAwesome from 'react-fontawesome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="App-welcome">
          <h1> Welcome! </h1>
          <p> 
            My name is Victor. I am a senior at the University of Richmond pursuing a B.S. in Computer Science. 
            This page is my personal website/portfolio. Feel free to look around! Thanks for stopping by!
          </p>
        </div>
        <div className="App-progress"> 
          <FontAwesome name="wrench"/>
          This website is currently in development and will be updated soon!
          <FontAwesome name="wrench"/>
        </div>
      </header>
    </div>
  );
}

export default App;
