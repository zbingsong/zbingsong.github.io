import React from "react";
import Card from "react-bootstrap/Card";
import no_image from "../../Assets/Projects/no_image.jpg";

function WorkCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath ?? no_image} className="card-img-top" alt="card-img" />
      <Card.Body>
        <a href={props.link ?? "#"} target="_blank" rel="noopener noreferrer">
          <Card.Title>{props.title ?? " "}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>{props.location ?? " "}</Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
}

export default WorkCard;
