import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope, faFilePdf, faBook, faTint, faPaintRoller, faIdBadge} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Resume from './resume.pdf';

function App() {
  return (
    <div className="App">
      <div id="side-bar">
        <img id="profile" src="images/profile.jpg" alt=""></img>
        <div className="App-welcome">
          <h2 id="name"> Victor Chen </h2> 
        </div>
        <p id="aboutme">
          Hi! I'm Victor, a Computer Science student at the University of Richmond, and an aspiring Software Developer. 
          I enjoy building software to help others and learning new technologies along the way. 
          Check out some of my recent projects here.
        </p>
        <div id="links">
          <a href="https://github.com/vchen8761"><FontAwesomeIcon icon={faGithub} size="2x" className="icon" title="vchen8761 @ Github"/></a>
          <a href="https://www.linkedin.com/in/victorchencs"><FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" title=" victorchencs @ LinkedIn"/></a>
          <a href="mailto:vchen8761@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" title="vchen8761 @ Gmail"/></a>
          <a href={Resume} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFilePdf} size="2x" className="icon" title="Resume"/></a>
        </div>
      </div>
      <div id="projects">
        <div className="card">
          <div className="project-icons"><FontAwesomeIcon icon={faBook} size="4x"/></div>
          <div className="project-descriptions">
            <strong> Accessible Spellbook </strong>
            <p> An Alexa skill that allows visually impaired users to access spell descriptions with just their voice input. Developed with Axios and Cheerio, npm modules used for web scraping. </p>
            <a href="https://github.com/vchen8761/spell-book-alexa-skill">View on Github</a>
          </div>
        </div>
        <div className="card">
          <div className="project-icons"><FontAwesomeIcon icon={faTint} size="5x"/></div>
          <div className ="project-descriptions">
            <strong> Quarterly </strong>
            <p> A Google Chrome extension that reminds users to stay hydrated and to practice self-care during extended computer usage. Developed using persistent Chrome API alarms.</p>
            <a href="https://github.com/vchen8761/quarterly-react"> View on Github</a>
          </div>
        </div>
        <div className="card">
          <div className="project-icons"><FontAwesomeIcon icon={faPaintRoller} size="4x"/></div>
          <div className="project-descriptions">
            <strong> Anime Visual Style Transfer </strong>
            <p> An application that allows users to apply style transfer from anime faces to human faces. Leverages a VGG-19 based convolutional neutral network from Tensorflow Hub.</p>
            <a href="https://github.com/vchen8761/AI-Style-Transfer"> View on Github</a>
          </div>
        </div>
        <div className="card">
          <div className="project-icons"><FontAwesomeIcon icon={faIdBadge} size="5x"/></div>
          <div className="project-descriptions">
            <strong> Active Threat Simulation Research </strong>
            <p> A multi-agent simulation of an active threat scenario using a 3D render of academic building. Developed for law enforcement and campuses to efficiently train for crises with minimal capital investment. </p>
            <a href="https://github.com/vchen8761/Active-Threat-Simulation-Research">View on Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
