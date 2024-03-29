import React from 'react';
import './homeLeft.css';
import {
  Container,
  Row,
  Col,
  Button,
 
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
          Naveen Duhan
         </h1>
         <h2 className="second_line">
           Welcomes You!
         </h2>
         <h3>
         <ReactTypingEffect
           text=" NGS Data Analysis || Machine Learning || Protein-protein Interaction || Python for Biology || Linux for Biology || Molecular Docking ... " //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
           typingDelay="2000"
           />
         </h3 >
          
           <br />
          
           {/* <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp; */}
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/research" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Research</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/publications" className="home-left-aboutme">Publications</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact</Link></Button> 
          
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
