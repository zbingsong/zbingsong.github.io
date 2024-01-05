import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
          <br />
          The majority of my projects are (unfortunately) proprietory. Below are 
          some of my public projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Event Browser"
              description="Full-stack class project for searching musical, movie, and sports events, with Angular as frontend and Node.js + Express.js as backend. Emphasis is put on user interface design."
              ghLink="https://github.com/zbingsong/web-tech-projects/tree/main/blCe10df_hw8"
              demoLink="https://eventbrowser30789.wl.r.appspot.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Student Performance Lookup System"
              description="An infrastructure-level class project in C++ that allows lookup of pre-entered student information, featuring a distributed server architecture and custom application-level protocols."
              ghLink="https://github.com/zbingsong/cpp-socket-programs/tree/main/proj4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SonarJava Quick Tutorial"
              description="The first comprehensive tutorial on SonarJava, a Java language plugin for SonarQube. The tutorial contains a quick introduction to SonarJava, its main classes, and examples of custom rules."
              ghLink="https://github.com/zbingsong/sonarjava-quick-tutorial"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LuckyMarket Backend"
              description="(Deprecated) A Nest.js backend for LuckyMarket, a second-hand item trading app in development, featuring full functions of JWT authentication and making use of Redis, MongoDB, and PostgreSQL."
              ghLink="https://github.com/zbingsong/lucky-market-nestjs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
