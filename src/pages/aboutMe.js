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
            About Me
            </h1>
             {/* <Card > */}
  
  {/* <Card.Body>
    <Card.Title className="card-me">About</Card.Title>
    <Card.Text> */}
    <p className="myText">
    I am Naveen Duhan a bioinformatics doctoral student at the Department of Plants, Soils, and Climate, Utah State University, Logan, Utah, USA.
    </p >
    <p className="myText">
    The initiation and development of academic interest is always a slow process and my understanding of Bioinformatics has undergone maturation through a series of academic activities.
    As a student of life sciences at University College Kurukshetra, I had a good understanding of Zoology, Botany, and Chemistry, but to comprehend theinformation of bioinformatics 
    I realized that I need equally sound knowledge base in informatics. To develop my interdisciplinary knowledge, 
    I joined an add-on certificate diploma in bioinformatics in evening classes (in the final year of my Bachelor's Degree).
     I tried desperately to be perfect in informatics techniques through self-study, 
     consulting a large amount of relevant technical literature, attending lectures, and discussing with classmates.
     After completing my Bachelor's from Kurukshetra University I joined Master's in Bioinformatics with research training 
     at Punjabi University, which provides me a strong theoretical and practical grounds of 
     Bioinformatics to concepts of molecular biology including subjects Biochemistry, Cheminformatics, 
     Immunology, Molecular modeling, Genomics, Proteomics, and several programming courses in Python, 
     PERL, Java with Biostatistics and Numerical optimization techniques. 
     This training helped me to evolve into a diligent scholar with broad insight, 
     capable of connecting ideas from varied disciplines to understand and approach the mystery of
      life that is regulated by the information encoded by four letters (A, T, Cor, G). Fortunately, 
      this complex system that holds life captive of hard-wired information can now be comprehended by 
      analyzing unprecedented data produced with emerging next-generation sequencing technologies.
    </p>

    {/* </Card.Text>
   
  </Card.Body>
</Card> */}
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
