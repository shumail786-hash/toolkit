import React, { useState, useEffect } from "react";
import "./resume.css";
import { BiEditAlt } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";
const Resume = () => {
  const [avatar, setAvatar] = useState("");
  const getPersonalInfoData = () => {
    const data = localStorage.getItem("personalData");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };
  const [personalUserData, setPersonalUserData] = useState(
    getPersonalInfoData()
  );

  const getInterestData = () => {
    const data = localStorage.getItem("userInterest");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [interestUserData, setInterestUserData] = useState(getInterestData());

  // Closing Personal PopUp

  // const togglePopUp = () => {
  //   setisOpen(!isOpen);
  //   setisEducationOpen(!isEducationOpen);}

  function getAvatar() {
    const data = localStorage.getItem("avatar");
    // console.log(data);
    if (data) {
      return setAvatar(data);
    } else {
      return [];
    }
  }
  useEffect(() => {
    getAvatar();
  }, []);

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
              <img className="avatar" src={avatar} alt="avatar" />
            </div>
            <div className="text-center mx-auto app__positioned-div">
              <Link to="/changeAvatar" className="avatarLink">
                <button className="changeAvatar">Change Avatar</button>
              </Link>
            </div>

            {/* <div className="app__positioned-div"></div> */}
            {/* {isOpen && <PersonalPopUp handleClose={togglePopUp} />} */}
            <div className="app__personal-edit mx-auto text-center">
              <button
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                }}
              >
                <Link to="/personal">
                  <BiEditAlt /> Edit Personal Info.
                </Link>
              </button>
            </div>
            {personalUserData &&
              personalUserData.map((element, index) => (
                <div key={index}>
                  <p className="mx-auto text-center app__userName-title">
                    <b>{element.userName}</b>

                    <p className="app__job-title">
                      <i>{element.userAge} Years</i>
                      <p>
                        {element.userCity}, {element.userCountry}
                      </p>
                    </p>
                  </p>
                  <p
                    className="mx-auto text-center fs-5"
                    style={{
                      opacity: 0.9,
                    }}
                  >
                    <b>{element.userJob}</b>
                    <p className="app__user-experience">
                      <i>{element.userExperience}</i>
                    </p>
                  </p>
                </div>
              ))}
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
                {/* {isInterestOpen && (
                  <InterestPopUp handleClose={toggleInterestPopUp} />
                )} */}

                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "17px",
                  }}
                >
                  <Link to="/interest">
                    <BiEditAlt /> Edit Interest.
                  </Link>
                </button>
              </span>
              <ul
                style={{
                  color: "black",
                }}
              >
                {interestUserData &&
                  interestUserData.map((element, index) => (
                    <li key={index}>{element.interest}</li>
                  ))}
              </ul>
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
