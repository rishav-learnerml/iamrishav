import React from "react";
import ReactTyped from "react-typed";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
          <h1>Hello World!&nbsp; I'm Rishav</h1><ReactTyped 
          className="typed-text"
          strings={
              ["A Web Developer","A Compititive Programmer","A Mobile App Developer","A Machine Learning Enthusiast","A Problem Solver","An Aspiring SDE"]
            
          }
          typeSpeed={40}
          backSpeed={50}
          />
          <a target="_blank" href="https://drive.google.com/file/d/12AjTkYkOIUo6wAxzB3L_dgMaH1a6NMlB/view?usp=sharing" className="btn-main-offer">my resume</a>
      </div>
    </div>
  );
}

export default Header;
