import React, { Component } from 'react';
import './research.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from "../components/Hmenu.js"
import {Helmet} from 'react-helmet';
import ResearchImg from '../components/researchimg';
import particles from '../const/about_particle.js';
import Particles from 'react-particles-js';
import { research } from '../components/researchdata';
import { Fade } from "react-reveal";

function Research(props) {
    const theme = {
    name: "dark",
    body: "#1D1D1D",
    text: "#FFFFFF",
    dark: "#000000",
    secondaryText: "#8D8D8D",
    accentColor: "#1087d5",
    accentBright: "#FC1056",
    projectCard: "#292A2D",
    skinColor: "#F7B799",
    skinColor2: "#FCB696",
    imageDark: "#292A2D",
    imageClothes: "#000000",
    avatarMisc: "#212121",
    avatarShoes: "#2B2B2B",
  };

 
    return (
        <Container className="education-header" fluid={true}>
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
          <HamburgerMenu />
           <Row>
           <div className="experience-main">
      
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ResearchImg/>
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {research.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {research["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {research["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      
    </div>
            
  
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }


export default Research;
