import React from 'react';
import './footer.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2021-{(new Date().getFullYear())} <strong>Naveen Duhan</strong>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
