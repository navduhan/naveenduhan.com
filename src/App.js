import React from "react";
import {
  BrowserRouter as Router,
  Switch,
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