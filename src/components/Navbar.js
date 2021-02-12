import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../components/newlogo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={logo} alt="" />
          <span>Rishav's Dev-Folio</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact me
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
