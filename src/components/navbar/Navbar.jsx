import React from "react";
import { images } from "../../constants";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <a className="navbar-brand" href="#Home">
          <img
            src={images.logo}
            alt="logo"
            className="logoImage"
            style={{
              height: "70px",
              width: "100px",
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            boxShadow: "none",
          }}
        >
          <GiHamburgerMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{
              position: "relative",
              left: "50%",
            }}
          >
            {["Build", "About", "Portfolio", "Contact"].map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={`#${item}`}
                  className="nav-link active"
                  aria-current="page"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
