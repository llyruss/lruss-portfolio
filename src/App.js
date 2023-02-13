import './App.css';

import React from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav"
import Foot from "./components/Foot/Foot"
import About from "./components/About/About"
import Contact from "./components/Contact/contact"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"

function App() {
  return (

    <Router>
      <Banner />
      <Nav />

      <Routes>
        <Route exact path ="/react-portfolio/" element= {<About/>}></Route>
        <Route exact path ="/contact" element={<Contact/>}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/portfolio" element={<Portfolio />}>
        <Route path='*' element={<Navigate to='/react-portfolio'/>} />
        </Route>

      </Routes>

      <Foot />

    </Router>
  )

}

export default App;
