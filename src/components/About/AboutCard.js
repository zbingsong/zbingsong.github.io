import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue-text">Bingsong Zeng </span>
            from <span className="blue-text">Los Angeles, California</span>.
            <br />
            I am working on a Master of Science in Computer Science at 
            the University of Southern California.
            <br />
            I hold a Bachelor of Science in Mathematics from Lafayette College.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
