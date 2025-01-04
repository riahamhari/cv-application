import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo/GeneralInfo.js"
import Education from "./Components/Education/Education.js";
import Experience from "./Components/Experience/Experience.js";
import Contact from "./Components/Contact/Contact.js"
import CareerObjective from "./Components/CareerObjective/CareerObjective.js";
import './styles/App.css';
import Skills from "./Components/Skills/Skills.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralInfo />
        <section className="main">
          <div className="left-column">
            <Contact />
            <Skills />
          </div>
          <div className="right-column">
            <CareerObjective />
            <Experience />
            <Education />
          </div>
        </section>

      </div>
    )
  }
}

export default App;
