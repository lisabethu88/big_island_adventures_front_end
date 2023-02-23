import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-1">
          <section className="footer-links">
          <p className="text-center mt-4 mb-4">
          2800 Ainaola Dr Hilo HI 96720-3540 USA
          </p>
          <p className="text-center mt-4 mb-4">(+1) 808 256 0913</p>
          <p className="text-center mt-4 mb-4">contact@bigislandadventures.com</p>
          <p className="text-center mt-4 mb-4">Big Island Adventures &copy; 2023</p>
          </section>
          </Col>
        </Row>

{/*       <Nav className="justify-content-center" as="footer">
        <Nav.Item>
          <Nav.Link href="/home">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">facebook</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">youtube</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">instagram</Nav.Link>
          </Nav.Item>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">
        Street name and number City, Country
      </p>
      <p className="text-center mt-4 mb-4">(+00) 0000 000 000</p>
      <p className="text-center mt-4 mb-4">office@company.com</p>
      <p className="text-center mt-4 mb-4">Company Name &copy; 2023</p>
    */}</Container> </footer>
  );
};

export default Footer;
