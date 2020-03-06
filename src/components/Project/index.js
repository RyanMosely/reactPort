import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function Project (props) {
  return <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <hr></hr>
    <Card.Text>

      <img src={props.picture} alt="project"></img>



{props.description}




      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
  <Card.Link href={props.github}>GitHub</Card.Link>
    <Card.Link href={props.app}>Application</Card.Link>
</Card>
}

export default Project;
