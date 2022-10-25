import React from "react";
import Main from "../Pages/Main";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import "./Navbar.css";
import Enquiry from "../Pages/Enquiry";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav className="nav_header">
          <div>
            <ul className="toHover">
              <li>
                <a href="#main" smooth>
                  EXPERTISE
                </a>
              </li>

              <li>
                <a href="#projects" smooth>
                  PROJECTS
                </a>
              </li>

              <li>
                <img
                  className="logo"
                  src={process.env.PUBLIC_URL + "logo-new.png"}
                  alt="logo"
                />
              </li>
              <li>
                <a href="#about">INVEST</a>
              </li>
              <li>
                <a>HOUSING</a>
              </li>
            </ul>
          </div>
          <div className="left-icon">
            <a href="#enquire">
              <button className="enquiry">ENQUIRE</button>
            </a>
            <div className="bars">
              <img src={process.env.PUBLIC_URL + "menu-bar.png"} alt="menu" />
            </div>
          </div>
        </nav>
        <div class="scroll-container">
          <div>
            <Main className="scroll-page" />
          </div>
          <div className="scroll-page">
            <Projects />
          </div>
          <div className="scroll-page">
            <About />
          </div>

          <div className="scroll-page2" >
            <Enquiry />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
