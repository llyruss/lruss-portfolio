import './App.css';

import React from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav"
import Foot from "./components/Foot/Foot"
import About from "./components/About/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"

function App() {
  return (
    
    <Router>
      <Banner />
      <Nav />
      
        <Switch>
        <Route exact path="/react-portfolio/">
            <About />
          </Route>

        <Route path="/about">
            <About />
          </Route>
          
          <Route path="/skills">
            <Skills />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

        </Switch>
    
      <Foot />
      
    </Router>
  )

}

export default App;
