import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Document } from "react-pdf";
import resume from "./files/resume.pdf";
import ScriptTag from "react-script-tag";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div className="App-main">
        <ul className="App-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resumé</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resumé />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div style={{ padding: ".5%" }}>
      <h2>About Me</h2>
      <p>
        My name is Ryan Wendell. I am a software engineer with a focus on full
        stack development. When I am not working I enjoy excercising, cooking,
        making coffee, video gaming, and photography.
      </p>

      <ScriptTag src="https://apps.elfsight.com/p/platform.js" defer>
        {" "}
      </ScriptTag>
      <div class="elfsight-app-5c08177f-d7b2-4ccb-aa89-b43c38100e7d"></div>
      {
        //to be implemented on my own, this is just a placeholder because I don't wanna do it right now
      }
    </div>
  );
}

function Resumé() {
  return (
    <div>
      <Document file={resume} />
      <p>If the PDF fails to load, please click <a href={resume}>here</a> to download a copy</p>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ padding: ".5%" }}>
      <h2>Projects</h2>
      <p>
        Here are some of the larger projects that I worked on, along with a
        brief description and a link to their repository.
      </p>
      <hr></hr>

      <div>
        <h3>
          <a href="https://github.com/rwendell/Smart-Art">Smart Art</a>
        </h3>
        <p>
          This is a collaborative drawing app created by Iowa State students for
          Com S 309. We worked used the agile approach to simulate a
          professional working environment and tried to use best industry
          practices when developing
        </p>
      </div>

      <div>
        <h3>
          <a href="https://github.com/davidboschwitz/all-star"> All Star</a>
        </h3>
        <p>
          The name doesn't really have anything to do with the functionality.
          This works as a basic 2-way radio repeater over IP.
        </p>
      </div>

      <div>
        <h3>
          <a href="https://github.com/rwendell/Password-Manager">
            {" "}
            Password Manager
          </a>
        </h3>
        <p>
          Simple password manager that encrypts passwords and saves them to your
          local data for retrieval{" "}
        </p>
      </div>
    </div>
  );
}
