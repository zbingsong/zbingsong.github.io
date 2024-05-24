import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import event_browser from "../../Assets/Experience/Projects/event_browser.jpg";
import sonarqube from "../../Assets/Experience/Projects/sonarqube.jpg";

function Projects() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={event_browser}
          title="Event Browser"
          description="Full-stack project for searching musical, movie, and sports events, with Angular as frontend and Node.js + Express.js as backend. Emphasis is put on user interface design."
          ghLink="https://github.com/zbingsong/web-tech-projects/tree/main/blCe10df_hw8"
          demoLink="https://eventbrowser30789.wl.r.appspot.com/"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          title="Student Performance Lookup System"
          description="Infrastructure-level class project in C++ that allows lookup of pre-entered student information, featuring a distributed server architecture and custom application-level protocols."
          ghLink="https://github.com/zbingsong/cpp-socket-programs/tree/main/proj4"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={sonarqube}
          title="SonarJava Quick Tutorial"
          description="The first comprehensive tutorial on SonarJava, a Java language plugin for SonarQube. The tutorial contains a quick introduction to SonarJava, its main classes, and examples of custom rules."
          ghLink="https://github.com/zbingsong/sonarjava-quick-tutorial"
        />
      </Col>
    </Row>
  );
}

export default Projects;
