import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import NavBar from './NavBar';
import CardComponent from './Card';

import Dnd from './images/dnd.png';
import Water from './images/water.jpg';
import StyleTransfer from './images/styletransfer.png'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img id="profile" src="images/profile.jpg" alt=""></img>
        <div className="App-welcome">
          <h2 id="name"> Victor Chen </h2> 
        </div>
        <p id="aboutme">
          Hi! I'm Victor, a Computer Science student at the University of Richmond, and an aspiring Full-Stack Web Developer. 
          I enjoy building software to help others and learning new technologies along the way. 
          Check out some of my recent projects below!
        </p>
      </header>
      
      <div id="projects">
        <CardComponent
          src={Dnd}
          title={"Accessible Spellbook"}
          text={"An Alexa skill that allows visually impaired users to access spell descriptions with just their voice input. Developed with Axios and Cheerio, npm modules used for web scraping."}
          buttonText={"Github Repository"}
          link={"https://github.com/vchen8761/spell-book-alexa-skill"}/>
        <CardComponent
          src={Water}
          title={"Quarterly"}
          text={"A Google Chrome extension that reminds users to stay hydrated and to practice self-care during extended computer usage. Developed using persistent Chrome API alarms."}
          buttonText={"Github Repository"}
          link={"https://github.com/vchen8761/quarterly-react"}/>
        <CardComponent
          src={StyleTransfer}
          title={"Neural Style Transfer"}
          text={"An application that allows users to apply style transfer from anime faces to human faces. Leverages a VGG-19 based convolutional neutral network from Tensorflow Hub."}
          buttonText={"Github Repository"}
          link={"https://github.com/vchen8761/AI-Style-Transfer"}/>
      </div>
    </div>
  );
}

export default App;
