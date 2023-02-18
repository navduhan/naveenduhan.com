import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/homePage.js";
import Research from "./pages/research.js";
import Publications from "./pages/publications.js"
import Contact from "./pages/contactPage";
import Education from "./pages/education.js";

// import Project from "../pages/projects";

export default function Nav() {
  return (
    <Router>
     <Routes>
       
        <Route path="/home" element={<Home/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/publications" element={<Publications/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Router>
  );
}