import React from "react";
import ReactTyped from "react-typed";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
          <h1>Hello World!&nbsp; I'm Rishav</h1><ReactTyped 
          className="typed-text"
          strings={
              ["Web Developer","Compititive Programmer","Mobile App Developer","Machine Learning Enthusiast","Problem Solver","Aspiring SDE"]
            
          }
          typeSpeed={40}
          backSpeed={50}
          />
          <a target="_blank" href="https://drive.google.com/file/d/1pmLBbovVgggX4U7WTCN0Vv5SHP6a_Go3/view?usp=sharing" className="btn-main-offer">my resume</a>
      </div>
    </div>
  );
}

export default Header;
