import React from "react";
import { images } from "../../constants";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand mx-auto text-center" href="/">
          <img
            src={images.logo}
            alt="logo"
            className="logoImage"
            style={{
              height: "70px",
              width: "100px",
            }}
          />
          &nbsp;{" "}
          <span className="cvHeading">Generate your Own CV for FREE!...</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
