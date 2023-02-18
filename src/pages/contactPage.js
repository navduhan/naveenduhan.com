import React from 'react';
import './contactPage.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../components/Hmenu.js';
import ContactLeft from '../components/contactLeft.js';
import EmailForm from '../components/email.js';

import {Helmet} from 'react-helmet';
import particles from '../const/contact_particle.js';
import Particles from 'react-particles-js';

class Contact extends React.Component {

//   componentDidMount() {
//     //--Naveen Duhan Portfolio website Google analytics--
//     //--Replace with your own key !!
//     ReactGa.initialize("UA-154721739-1");
//     ReactGa.pageview('motasimfoad.com - Contact Screen');
//   }
   //--Naveen Duhan Portfolio website Google analytics--

  render() {
    return (
      <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact |NAveen Duhan</title>
                <link rel="canonical" href="http://naveenduhan.com/contact" />
                <meta name="description" content="Naveen Duhan | Contact - Product Manager | Project Manager | Software Engineer" />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles
            params={particles}
            className="particle"
          />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
            <HamburgerMenu />
            </Row>
            <Row className="Contact-main">
            <Col  xl={6}  className="Contact-left">
            <ContactLeft />
            </Col>
            <Col  xl={6}  className="Contact-right">
              <EmailForm />
            </Col>
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
       </Animate>
      </div>
    )
  }
}export default Contact