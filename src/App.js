import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ProjectDescription from "./components/ProjectDescription";
import projects from "./projects.json";
import about from "./about.json";
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





class App extends Component {
  state = {
    about,
    projects
    
  };




//FILTER METHOD

  deparmentFilt = () => {
  

  };


//SORT METHOD

  deparmentFiltTwo = () => {


  
   
  };






  render() {
    return (
      <Wrapper>
      <Router>

      <Header />


      

     

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">


          <ProjectDescription />

<div className="projects">
  <div className = "row">
{this.state.projects.map(project => (
  <Project 
  id={project.id}
  key={project.id}
  picture={project.picture}
  title={project.title}
  description={project.description}
  github={project.github}
  app={project.app}
  />
  ))}
  </div>
  </div>


         

            
          </Route>
          <Route path="/">
            
          <About 
          github={about[0].github}
          linkedIn={about[0].linkedIn}
          resume={about[0].resume}
          />

          </Route>
        </Switch>
     
    </Router>

    <Footer>
       
            </Footer>
    
    
    </Wrapper>
    
    
    );
  }
}

export default App;
