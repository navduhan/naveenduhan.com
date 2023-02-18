import React from 'react';
import './homeRight.css';
import Duhan from '../assets/naveen.png';
import { Fade } from "react-reveal";
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import SocialIcons from './socialIcons';

function Home_Right() {
  return (
    <Container className="home-right">
      
      <Row className="home-right-main">
      <Fade right duration={1000}>
        <Col xl={12}>
          <br />
          <Image src={Duhan} className="home-right-main-img" alt="Image of Naveen Duhan"/>
        </Col>
       
        <Row className="home-right-footer" >
          <SocialIcons />
        </Row>
        </Fade>
        
      </Row>
    </Container>
  );
}

export default Home_Right;