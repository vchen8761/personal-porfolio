import React from 'react';
import NavBar from './NavBar';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;
