import React from 'react';
import './socialIcons.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin, faResearchgate } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
         
          <a href="https://fb.com/navduhan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
          <a href="https://github.com/navduhan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://twitter.com/navduhan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/freaky_nav/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/navduhan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
          <a href="https://www.researchgate.net/profile/Naveen-Duhan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="rgate" icon={faResearchgate} />
          </a>
         </Col>
  );
}

export default SocialIcons;