import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="main">
      <div className="main-bg">
        <div className="main-flex">
          <div className="main-head">
            <h1>Build Resume</h1>
          </div>
          <div className="main-work">
            <button className="btn__generate-cv">
              <Link to="/buildResume" className="link-generate-cv">
                Generate CV
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
