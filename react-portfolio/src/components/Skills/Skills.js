import React from "react";
import './Skills.css'

function Skills() {
  return (
<>
    <section className="skillsSection" id="displayIcons">
    <div id="codingLangs">
      <i class="far fa-file-excel fa-3x"></i>
      <i class="fas fa-database fa-3x"></i>
      <i class="fab fa-js-square fa-3x"></i>
      <i class="fab fa-react fa-3x"></i>
      <i class="fab fa-node-js fa-3x"></i>
      <i class="fab fa-html5 fa-3x"></i>
      <i class="fab fa-css3-alt fa-3x"></i>
    </div>

  
    <h1 id="skillsH1">Full-Stack Web Development</h1>
  
    <hr></hr>
    <p>My experience with the following tools comes from the University of Minnesota Full-Stack Web development bootcamp along with independent study and practice.</p>
  </section>
  
  <main>
  <div id="skillsDiv">
    
  <section id="dataSkills">
  
    <h3>Microsoft Excel</h3>
    <p>(Macros, Pivot Tables)</p>
    <p>____</p>
  

    <h3>Databases</h3>
    <p>(MySQL, MongoDB)</p>
    <p>____</p>

    <h3>JavaScript</h3>
    <p>(JQuery, React, Node, Express)</p>
    <p>____</p>

    <h3>HTML5/CSS</h3>
    <p>(FlexBox, BootStrap)</p>


  
  </section>

 
</div>
</main>

</>

  );
}

export default Skills;