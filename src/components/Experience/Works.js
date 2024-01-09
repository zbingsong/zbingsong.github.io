import React from "react";
import { Col, Row } from "react-bootstrap";
import WorkCard from "./WorkCard";
import kmsoft from "../../Assets/Experience/Companies/kmsoft.png";
import petkeley from "../../Assets/Experience/Companies/petkeley.jpeg";

function Works() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={4} className="project-card">
        <WorkCard
          imgPath={petkeley}
          title="Petkeley"
          location="Berkeley, California"
          link="https://www.linkedin.com/company/petkeley/"
        />
      </Col>

      <Col md={4} className="project-card">
        <WorkCard
          imgPath={kmsoft}
          title="Wuhan KM Information Technology Co., Ltd."
          location="Wuhan, China"
          link="https://www.kmsoft.com.cn/"
        />
      </Col>
    </Row>
  );
}

export default Works;