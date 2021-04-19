import React from 'react';
import './Hmenu.css';
import {
  Link
 } from "react-router-dom";

function Hmenu() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div>
            
          </div>
          </div>
          <div className="menu">
            <div>
            <div>
                <ul>
                  <li><Link to="/home">HOME</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/contact">RESEARCH</Link></li>
                  <li><Link to="/publications">PUBLICATIONS</Link></li>
                  <li><Link to="/contact">CONTACT</Link></li>

                </ul>
               </div>
             </div>
            </div>
         </div>
  );
}

export default Hmenu;