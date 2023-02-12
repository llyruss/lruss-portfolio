import React from "react";
import "./Portfolio.css"

function Portfolio() {
  return (


<main>
<h1>Projects</h1>

<section id="listedProjects">

  <ul class="styled">

    <li>
      <div>
        <h3>What's Cookin?</h3>
        <p className="portfolioP">A blog for sharing recipes among friends.</p>
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
      <div>
        <h3>Weather Dashboard</h3>
        <p className="portfolioP">Search for weather conditions in any major city</p>
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
      <div>
        <h3>SuperSearch</h3>
        <p className="portfolioP">A search engine for your favorite superheroes and villains - find their most recent media appearances. </p>
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
      <div>
        <h3>Random Password Generator</h3>
        <p className="portfolioP">Generate a secure and random password with user specified criteria.</p>
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
      <div>
        <h3>Code Quiz</h3>
        <p className="portfolioP">A timed multiple choice quiz utilizing local storage.</p>
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
      <div>
        <h3>Tech Blog</h3>
        <p className="portfolioP">The tech blog is a full-stack application utilizing node, <br></br> express, sequelize, and handlebars</p>
        <table>
          <tr>
            <td><a href="https://github.com/llyruss/Tech-Blog/">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="https://lilystechblog.herokuapp.com/">Deployed Project</a></td>
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
