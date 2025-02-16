import React from "react";


import PublicationCard from "../const/publicationcard";
import "./publications.css";
import { publication } from "../components/mypub.js";
import { Fade } from "react-reveal";
import PublicationImg from "../components/pubimage";
import HamburgerMenu from "../components/Hmenu.js"
import Footer from "../components/footer";
import Animate from 'react-smooth';
import particles from '../const/about_particle.js';
import Particles from 'react-particles-js';
import {Helmet} from 'react-helmet';
import {Container, Row} from 'react-bootstrap';

import { pub } from "../components/mypub.js";
// const ColoredLine = ({ color }) => (
//   <hr
//       style={{
//           color: color,
//           backgroundColor: color,
//           height: 5,
//           margin:2 
//       }}
//   />
// );

function Publications(props) {
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
    <title>Publications | Naveen Duhan</title>
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
              <PublicationImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {publication.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {publication["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {publication["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      
    </div>
    </Row>
    <div className=" row justify-content-center mt-5">
    <h3 className="mh">Research Articles</h3>
    <Fade right duration={2000}>
   <div className="col-md-12 pub-card">
   {pub.pub.map((pub, index) => {
          return <PublicationCard publication={pub} key={index+1} />;
        })}
   </div>
</Fade>
    
    
     </div>
    </Animate>
    <Row className="App-footer">
              <Footer />
            </Row>
    </Container>
  );
}

export default Publications;
