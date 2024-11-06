import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
/*import { DiVim } from "react-icons/di";*/

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Element name="Home">
                  <Home />
                </Element>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <Element name="À Propos">
                  <About />
                </Element>
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div>
                <Element name="Mes Projets">
                  <Projects />
                </Element>
              </div>
            }
          />
          <Route
            path="/resume"
            element={
              <div>
                <Element name="Mon CV">
                  <Resume />
                </Element>
              </div>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
