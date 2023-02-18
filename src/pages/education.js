import React from "react";
import Educations from "../components/educationscard";
import EducationImg from "../components/edimage";
import "./education.css";
import { Fade } from "react-reveal";
import HamburgerMenu from "../components/Hmenu.js"
import Footer from "../components/footer";
import Animate from 'react-smooth';
import particles from '../const/about_particle.js';
import Particles from 'react-particles-js';
import {Helmet} from 'react-helmet';
import {Container, Row} from 'react-bootstrap';
function Education(props) {
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
    <title>Education | Naveen Duhan</title>
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
    <div className="education-main">
    
   
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Educational Qualification
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in hackathons and other tech-related
                activities. Below are some of my major certifications.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        
      </div>
     
    </div>
    </Row>
    </Animate>
    <Row className="App-footer">
              <Footer />
            </Row>
    </Container>
  );
}

export default Education;
