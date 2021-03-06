import React from "react";

//Bootstrap
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const d = new Date();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; ProShop {d.getFullYear()}{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
