import React from "react";
import "./Hmenu.css";
import { NavLink, Link } from "react-router-dom";
// import log from "../assets/log.png";
// import { Image } from "react-bootstrap";
function Hmenu() {
  return (
    
    <header className="header">
    <NavLink  className="logo">
      <span style={{ color: "#FFFFFF" }}></span>
      <span className="logo-name" style={{ color: "#FFFFFF" }}>
       ** Bioinfo Freak **
      </span>
      <span style={{ color: "#FFFFFF" }}></span>
 {/* <Image src={log} className="himg" alt="Image of Naveen Duhan"/> */}
    </NavLink>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon"></span>
    </label>
    <ul className="menu">
      <li>
        <NavLink
          className="home"
          to="/home"
          tag={Link}
          activestyle={{ fontWeight: "bold" }}
          style={{ borderRadius: 5, color: "#FFFFFF" }}
        >
          Home
        </NavLink>
      </li>
     
      <li>
        <NavLink
          className="xp"
          to="/education"
          tag={Link}
          activestyle={{ fontWeight: "bold" }}
          style={{ borderRadius: 5, color: "#FFFFFF" }}
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          className="ec"
          to="/research"
          tag={Link}
          activestyle={{ fontWeight: "bold" }}
          style={{ borderRadius: 5, color: "#FFFFFF" }}
        >
          Research
        </NavLink>
      </li>
      <li>
        <NavLink
          className="projects"
          to="/publications"
          tag={Link}
          activestyle={{ fontWeight: "bold" }}
          style={{ borderRadius: 5, color: "#FFFFFF" }}
        >
          Publications
        </NavLink>
      </li>
      <li>
        <NavLink
          className="cr"
          to="/contact"
          tag={Link}
          activestyle={{ fontWeight: "bold" }}
          style={{ borderRadius: 5, color: "#FFFFFF" }}
        >
          Contact 
        </NavLink>
      </li>
      
    </ul>
  </header>
  );
}

export default Hmenu;
