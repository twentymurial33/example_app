import React from "react";
import Typed from "react-typed";
// import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={[
            "React Developer",
            "Cloud Computing",
            "Technical Program Manager",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <img className="logo" src={logo} alt="logo...." /> */}

        <a
          href="https://www.linkedin.com/in/murial-anindo/"
          className="btn-main-offer"
        >
          {" "}
          {/* <img className="social" src={social} alt="logo...." /> */}
        </a>
      </div>
    </div>
  );
}

export default Main;
