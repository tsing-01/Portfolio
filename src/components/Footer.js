import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} TSING</h3>
        </Col>
        <Col md="4" className="footer-body">
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
