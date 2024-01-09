import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import no_image from "../../Assets/Experience/no_image.jpg";

function WorkCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath ?? no_image} className="card-img-top" alt="card-img" />
      <Card.Body>
        <Card.Title>
          {props.title ?? " "}
        </Card.Title>

        <Card.Text style={{ textAlign: "center" }}>
          {props.location ?? " "}
        </Card.Text>

        <Button variant="primary" href={props.link} target="_blank">
          Company site
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WorkCard;
