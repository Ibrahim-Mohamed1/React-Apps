import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./Home"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"

function App() {
  return (
    <div className="appDiv">
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/skills"  component={Skills}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
