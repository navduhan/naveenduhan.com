import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/homePage.js";
import About from "./pages/aboutMe.js";
import Publications from "./pages/publications.js"
import Contact from "./pages/contactPage";


// import Project from "../pages/projects";

export default function Nav() {
  return (
    <Router>
     <Routes>
       
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/publications" element={<Publications/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Router>
  );
}