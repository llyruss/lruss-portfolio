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
        <h3>Project One</h3>
        <p className="portfolioP">Description One <br></br> game data in effort to predict game outcomes.</p>
        <table>
          <tr>
            <td><a href="#">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="#">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>

    <li>
      <div>
        <h3>Weather Dashboard</h3>
        <p className="portfolioP">Search For Weather Conditions In  Any Major City</p>
        <table>
          <tr>
            <td><a href="#">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="#">Deployed Project</a></td>
          </tr>
        </table> 
      </div>
    </li>

    <li>
      <div>
        <h3>Project Three</h3>
        <p className="portfolioP">Description Three </p>
        <table>
          <tr>
            <td><a href="#">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="#">Deployed Project</a></td>
         </tr> 
        </table> 
      </div>
    </li>
    
  </ul>


  <ul class="styled">

  <li>
      <div>
        <h3>Project Four</h3>
        <p className="portfolioP">Description Four </p>
        <table>
          <tr>
            <td><a href="#">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="#">Deployed Project</a></td>
         </tr> 
        </table> 
      </div>
    </li>

   <li>
      <div>
        <h3>Code Quiz</h3>
        <p className="portfolioP">A timed multiple choice quiz utilizing local storage. <br></br> Can you beat your high score?</p>
        <table>
          <tr>
            <td><a href="#">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="#">Deployed Project</a></td>
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
            <td><a href="#">Project Repository</a></td>
          </tr>
          <tr>
            <td><a href="#">Deployed Project</a></td>
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
