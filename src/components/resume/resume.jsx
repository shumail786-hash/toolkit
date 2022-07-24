import React, { useState } from "react";
import "./resume.css";
import PersonalPopUp from "./personalPopUp";
import { MdChangeCircle } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { BsGear } from "react-icons/bs";

const Resume = () => {
  const [isOpen, setisOpen] = useState(false);

  // Closing Personal PopUp

  const togglePopUp = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="app__resume">
      <div
        className="container bg-white"
        style={{
          borderTop: "2px solid navy",
        }}
      >
        <div className="row mx-auto">
          <div className="col-md peronalInfo">
            <div className="avatarbg">
              <div className="avatar">
                <label className="change__avatar-label">
                  <MdChangeCircle /> Change
                  <input type="file" name="avatar" />
                </label>
              </div>
            </div>
            <div className="app__positioned-div"></div>
            {isOpen && <PersonalPopUp handleClose={togglePopUp} />}

            <div className="app__personal-edit mx-auto text-center">
              <button
                onClick={togglePopUp}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                }}
              >
                <BiEditAlt /> Edit Personal Info.
              </button>
            </div>
            <p className="mx-auto text-center app__userName-title">
              <b>Muhammad Shumail Mushtaq</b>

              <p className="app__job-title">
                <i>21 Years</i>
                <p>Lahore, Pakistan</p>
              </p>
            </p>
            <p
              className="mx-auto text-center fs-5"
              style={{
                opacity: 0.9,
              }}
            >
              <b>React JS Developer</b>
              <p className="app__user-experience">
                <i>LESS THAN 1 YEAR EXPERIENCE</i>
              </p>
            </p>
            <div className="mx-auto text-center app__education-btn">
              <TbSchool />
              &nbsp;
              <i>Education</i>
              <span className="app__personal-edit app__education-edit  mx-auto text-center">
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "17px",
                  }}
                >
                  <BiEditAlt /> Edit Education.
                </button>
              </span>
              <h3 className="app__education-lists">
                ICS | Govt. Islamia College Civil Lines Lahore
              </h3>
            </div>
            <div className="mx-auto text-center app__education-btn ">
              <BsGear />
              &nbsp;
              <i>Your Interest</i>
              <span className="app__personal-edit app__education-edit mx-auto text-center">
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "17px",
                  }}
                >
                  <BiEditAlt /> Edit Interest.
                </button>
              </span>
            </div>
          </div>
          <div className="col-md peronalInfo">
            <div className="avatarbg">
              <div className="avatar"></div>
            </div>
          </div>
          <div className="col-md peronalInfo">
            <div className="avatarbg">
              <div className="avatar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;