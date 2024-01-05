import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava } from "react-icons/di";
import { PiFileSqlFill } from "react-icons/pi";
import {
  SiCoursera,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiWolframmathematica,
} from "react-icons/si";

function Languagestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCoursera />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiFileSqlFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWolframmathematica />
      </Col>
    </Row>
  );
}

export default Languagestack;
