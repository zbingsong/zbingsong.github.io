import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Projects from "./Projects";
import Works from "./Works";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          I have worked at these <strong className="blue-text">Companies</strong>
        </h1>
        <Works />
        
        <h1 className="project-heading">
          My Recent <strong className="blue-text">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
          <br />
          The majority of my projects are (unfortunately) proprietory. Below are some of my public projects.
        </p>
        <Projects />
      </Container>
    </Container>
  );
}

export default Experience;
