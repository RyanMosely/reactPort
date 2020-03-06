import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";


function About(props) {
  return <div className="about">

<Card>
  <Card.Body>
    <div class="greet">
      Hello! My name is Ryan Mosely. 
      <br></br>
I am from the San Francisco Bay Area and currently reside in the city of Los Angeles proper.

</div>
<br></br>
<div class="aboutBod">
    <div className="aboutSubBod">
Designing and building applications is what I love to do.
</div>
<br></br>

<hr></hr>
<div class="image">
<img src="./headshotbw.JPG" alt="something"></img>
</div>
<hr></hr>
<div className="aboutMain">
Communication and problem solving efficiently is very important to me when applying myself to a project.
I work very well in team environemts and look forward to meeting new people to work with!
</div>


<br></br>

</div>



<a className="links" href={props.resume}>    Resume    </a>
<a className="links" href={props.linkedIn}>    LinkedIn    </a>
<a className="links" href={props.github}>    GitHub    </a>

<br></br>
<br></br>
<br></br>

<div>Email: rmosely89@gmail.com</div>
<br></br>
<div>Phone Number: 925.998.4702</div>


</Card.Body>
</Card>


  </div>

/*what interests me and what can I bring to the table*/


}

export default About;