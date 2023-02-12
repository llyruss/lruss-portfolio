import React from "react";
import './Foot.css'
function Footer() {
  return (
    <footer>
    <div id="contact">
        <h4 className = "foot">(603) 852 - 3714 | llyruss@yahoo.com</h4>
        <div id="icons">
       
            <a href="https://github.com/llyruss" target="_blank" rel="noreferrer"><i id="githubIcon" class="fab fa-github fa-3x"></i></a>
          
            <a href="https://www.linkedin.com/in/lily-russ/" target="_blank" rel="noreferrer"><i id="linkedinIcon" class="fab fa-linkedin fa-3x"></i></a>
       
      </div>
  </div>
  </footer>
  );
}

export default Footer;