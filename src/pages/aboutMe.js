import React, { Component } from 'react';
import './aboutMe.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Footer from '../components/footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../components/Hmenu';
import particles from '../const/about_particle.js';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import {
    Link
   } from "react-router-dom";
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
  );
class About extends Component {

//   componentDidMount() {
//     //--Naveen Duhan Portfolio website Google analytics--
//     //--Replace with your own key !!
//     ReactGa.initialize("UA-154721739-1");
//     ReactGa.pageview('naveenduhan.com - About Screen');
//     //--Naveen Duhan Portfolio website Google analytics--
//   }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About | Naveen Duhan</title>
                <link rel="canonical" href="http://naveenduhan.com/about" />
                <meta name="description" content="Naveen Duhan | About - Bioinformatics | Python for Biology | NGS Data Analysis
                    Experienced Bioinformatician with a demonstrated history of working in Bioinformatics and Computational Biology filed. 
                    Skilled in NGS data analyis, protein-protein interactions, Python programming for biology, Linux for biology. 
                    Strong base with a BSc in Biological Sciences from Kurukshetra University Kurukshetra and MSc Bioinformatics from Pubjabi University Patiala. 
                    Currently pursuing PhD Bioinformatics from Utah State University." />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              <HamburgerMenu />
             <Col xl={8}className="about-left-main-col">
             <h1 className="first-line">
            About 
            </h1>
             <Card >
  
  <Card.Body>
    {/* <Card.Title className="card-me">About</Card.Title> */}
    <Card.Text>
    <h4>
         <ReactTypingEffect
           text="I am a Bioinformatics Doctoral student at Department of Plants, Soils and Climate, Utah State University, Logan, UT, USA. My research focuses   " //text=["Hello.", "World!"]
           className="typical"
           speed="50"
           eraseDelay="50000000"
           typingDelay="100"
           />
         </h4 >

    </Card.Text>
   
  </Card.Body>
</Card>
              </Col>
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default About;
