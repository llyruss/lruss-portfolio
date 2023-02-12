import React from "react";
import './About.css'
import Me from '../../images/lily.jpeg'
function About() {
  return (
    <>
        <main>
            <div id="bio">

                <img id="bio-pic" src= {Me} alt="bio-pic"></img>
                <p>Write a paragraph about me here.
                </p>
                
            </div>

        </main>
    </>
  );
}

export default About;