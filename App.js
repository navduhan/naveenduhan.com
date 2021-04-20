import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./src/pages/homePage.js";
import About from "./src/pages/aboutMe.js";
import Publications from "./src/pages/publications.js"
import Contact from "./src/pages/contactPage";


// import Project from "../pages/projects";

export default function Nav() {
  return (
    <Router>
     <Switch>
       
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/publications" component={Publications} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}