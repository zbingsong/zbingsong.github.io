import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Originally Designed by&nbsp;
            <a
                href="https://github.com/soumyajit4419/Portfolio"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
              Soumyajit Behera
            </a>, Developed by BZ
          </h3>
        </Col>
        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/zbingsong"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/bingsong-zeng/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} BZ</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
