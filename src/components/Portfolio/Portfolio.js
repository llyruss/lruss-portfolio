import React from "react";
import "./Portfolio.css"
import Cookin from '../../images/whats-cookin.png'
import Weather from '../../images/weather.png'
import Super from '../../images/supersearch.png'
import Password from '../../images/password-generator.png'
import Quiz from '../../images/code-quiz.png'
import BOTR from '../../images/boardoftherings'


function Portfolio() {
  return (


<main>
<h1>Projects</h1>

<section id="listedProjects">

  <ul class="styled">

    <li>
      <div className = "projectDiv">
        <h3>What's Cookin?</h3>
        <p className="portfolioP">A blog for sharing recipes among friends.</p>
        <img className= "projectPic" src = {Cookin}></img>
        <table>
          <tr>
            <td><a href="https://github.com/llyruss/What-s-Cookin">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://whatscookin.herokuapp.com/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>

    <li>
    <div className = "projectDiv">
        <h3>Weather Dashboard</h3>
        <p className="portfolioP">Search for weather conditions in any major city</p>
        <img className= "projectPic" src = {Weather}></img>
        <table>
          <tr>
            <td><a href="https://github.com/llyruss/Weather-Dashboard/">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://llyruss.github.io/Weather-Dashboard/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>

    <li>
    <div className = "projectDiv">
        <h3>SuperSearch</h3>
        <p className="portfolioP">A search engine for your favorite superheroes and villains- find their most recent media appearances. </p>
        <img className= "projectPic" src = {Super}></img>
        <table>
          <tr>
            <td><a href="https://github.com/llyruss/SuperSearch">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://llyruss.github.io/SuperSearch">Deployed Project</a></td>
         </tr> 
        </table> 
      </div>
    </li>
    
  </ul>


  <ul class="styled">

  <li>
  <div className = "projectDiv">
        <h3>Random Password Generator</h3>
        <p className="portfolioP">Generate a secure and random password with user specified criteria.</p>
        <img className= "projectPic" src = {Password}></img>
        <table>
          <tr>
            <td><a href="https://github.com/llyruss/react-portfolio/">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://llyruss.github.io/Password-Generator/">Deployed Project</a></td>
         </tr> 
        </table> 
      </div>
    </li>

   <li>
   <div className = "projectDiv">
        <h3>Code Quiz</h3>
        <p className="portfolioP">A timed multiple choice quiz utilizing local storage.</p>
        <img className= "projectPic" src = {Quiz}></img>
        <table>
          <tr>
            <td><a href="https://github.com/llyruss/Code-Quiz/">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href=" https://llyruss.github.io/Code-Quiz/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>


    <li>
    <div className = "projectDiv">
        <h3>Board of the Rings</h3>
        <p className="portfolioP"> An online multiplayer trivia board game. It's the Unexpected Party Game you'll love! </p>
        <img className= "projectPic" src = {BOTR}></img>
        <table>
          <tr>
            <td><a href="https://github.com/binderb/board-of-the-rings">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://boardoftherings.herokuapp.com/">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>
    
  </ul>
 
</section>

</main>

  );
}

export default Portfolio;
