import React from "react";
import { NavLink } from "react-router-dom"
import './Nav.css'

function Nav() {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/react-portfolio">About</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><a href="https://docs.google.com/document/d/1K_5iYDtZQFixDea5ptGWI1-_p8hnUM_4SlY8Kou9CMI/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                <li><NavLink to="/contact">Contact Me</NavLink></li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;