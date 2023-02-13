import React from "react";
import { NavLink } from "react-router-dom"
import './Nav.css'

function Nav() {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><a href="#" target="_blank" rel="noreferrer">Resume</a></li>
                <li><NavLink to="/contact">Contact Me</NavLink></li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;