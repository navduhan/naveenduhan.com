import React from 'react';
import './homePage.css';
import HomeLeft from '../components/homeLeft.js';
import HamburgerMenu from "../components/Hmenu.js"
import HomeRight from '../components/homeRight.js';
import Footer from '../components/footer.js';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../const/particle.js';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

// //--Naveen Duhan Portfolio website Google analytics--
// //--Replace with your own key !!
// function Analytics(){
//   ReactGa.initialize("UA-154721739-1")
//   ReactGa.pageview('naveenduhan.com - Home Screen')
// }
// //--Naveen Duhan Portfolio website Google analytics--

function Home() {
  // Analytics()
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Naveen Duhan</title>
                  <link rel="canonical" href="http://naveenduhan.com/home" />
                  <meta name="description" content="Naveen Duhan | Home -Bioinformatician | Machine Learing  | NGS Data analysis" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="App-header" fluid={true}>
          <Row className="Hamburger-menu">
            <HamburgerMenu />
            </Row>
            <Row className="App-main">
            
              <Col  xl={7}  className="App-left">
                <HomeLeft />
              </Col>
              <Col  xl={5} className="App-right">
                <HomeRight />
              </Col>
            </Row>
            <Row className="App-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Home;
