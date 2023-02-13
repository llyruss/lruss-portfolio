import React from "react";
import './About.css'
import Me from '../../images/lily.jpeg'

function About() {
  return (
    <>
        <main>
            <div id="bio">

                <img id="bio-pic" src= {Me} alt="bio-pic"></img>
                <p>Lily is a creative individual who loves taking on innovative projects. She brings passion to her work, whether it be a full-stack web application or a knitted sweater. Lily is patient and thorough till the job is done and always has her eye out for the next challenge.
                </p>
                
            </div>

        </main>
    </>
  );
}

export default About;