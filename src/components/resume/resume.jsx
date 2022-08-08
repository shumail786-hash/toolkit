import React, { useState, useEffect } from "react";
import "./resume.css";
import { BiEditAlt } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
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

  function getEducationData() {
    const data = localStorage.getItem("education");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  const [getEducationValues, setgetEducationValues] = useState(
    getEducationData()
  );
  useEffect(() => {
    getAvatar();
  }, []);

  const [getSummaryValues, setgetSummaryValues] = useState(getSummaryData());
  function getSummaryData() {
    const data = localStorage.getItem("userSummary");
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  const [getExperienceValues, setgetExperience] = useState(getExperienceData());
  function getExperienceData() {
    const data = localStorage.getItem("experience");
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  const [getContactInfoValue, setgetContactInfoValue] = useState(
    getContactData()
  );

  function getContactData() {
    const data = localStorage.getItem("contactInfo");
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
  const [getProjectValues, setgetProjectValues] = useState(getProjectData());
  function getProjectData() {
    const data = localStorage.getItem("projects");
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

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
              <img className="avatar" src={avatar} alt="profile" />
            </div>
            <div className="text-center mx-auto app__positioned-div">
              <Link to="/changeAvatar" className="avatarLink">
                <button className="changeAvatar mt-4">Change Avatar</button>
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
                <div key={element.userAge + index}>
                  <span className="mx-auto text-center">
                    <p className="app__userName-title">
                      <b>{element.userName}</b>
                    </p>

                    <p className="app__job-title">
                      <i>{element.userAge} Years</i>
                      <p>
                        {element.userCity}, {element.userCountry}
                      </p>
                    </p>
                  </span>
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
                  <Link to="/addEducation">
                    <BiEditAlt /> Add Education.
                  </Link>
                </button>
              </span>
              {getEducationValues &&
                getEducationValues.map((element, index) => (
                  <span key={index}>
                    <h3 className="app__education-lists">
                      {element.degreeType} | {element.addEducation}
                    </h3>
                    <h3 className="app__education-lists">
                      Start Date: {element.yearStart} | End Date:{" "}
                      {element.endYear}
                    </h3>
                  </span>
                ))}
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
                    <BiEditAlt /> Add Interest.
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
            <div className="row">
              <div className="col-12 mt-3 mb-2">
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "18px",
                    fontFamily: "serif",
                  }}
                >
                  <Link to="/addSummary">
                    <FaPencilAlt /> Add Summary.
                  </Link>
                </button>
              </div>
              <div className="col-12">
                {getSummaryValues ? (
                  getSummaryValues.map((element, index) => (
                    <>
                      <p
                        style={{
                          fontFamily: "calibri",
                        }}
                      >
                        {element.summary}
                      </p>
                      <hr />
                    </>
                  ))
                ) : (
                  <>
                    <h3>Add summary regarding to your work. </h3>
                    <hr />
                  </>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "18px",
                    fontFamily: "serif",
                  }}
                >
                  <Link to="/addWorkExperience">
                    <HiOutlineAcademicCap /> Add Experience.
                  </Link>
                </button>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr className="tableHeadings">
                    <th scope="col">#</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Experience</th>
                  </tr>
                </thead>

                <tbody>
                  {getExperienceValues ? (
                    getExperienceValues.map((element, index) => (
                      <>
                        <tr>
                          <th className="experienceTr" scope="row">
                            {index + 1}
                          </th>
                          <td className="experienceTr">
                            {element.companyName}
                          </td>
                          <td className="experienceTr">{element.jobTitle}</td>
                          <td className="experienceTr">
                            {element.totalYears < 1 && (
                              <>{element.totalYears} Months of Experience</>
                            )}
                            {element.totalYears >= 1 && (
                              <>{element.totalYears} Years of Experience</>
                            )}
                          </td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                      <tr>
                        <th scope="row">1</th>
                        <td className="experienceTr">Microsoft</td>
                        <td className="experienceTr">Software Enginner</td>
                        <td className="experienceTr">2</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
              <hr />
              <div className="row">
                <div className="col-12">
                  <button
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "18px",
                      fontFamily: "serif",
                    }}
                  >
                    <Link to="/addContact">
                      <HiOutlineAcademicCap /> Add Contact Info.
                    </Link>
                  </button>
                </div>
                {getContactInfoValue ? (
                  getContactInfoValue.map((element, index) => (
                    <>
                      <span className="row">
                        <div className="col-md experienceTr">
                          <AiOutlineMail />{" "}
                          <a href={"mailto:" + element.userEmail}>
                            {element.userEmail}{" "}
                          </a>
                        </div>
                        <div className="col-md experienceTr">
                          <AiOutlineMobile />{" "}
                          <a href={"tel:" + element.userPhoneNumber}>
                            {element.userPhoneNumber}
                          </a>
                        </div>
                      </span>
                      <span className="row">
                        {element.userLinkedIn !== "" && (
                          <>
                            <div className="col-md experienceTr">
                              <FaLinkedin />{" "}
                              <a href={element.userLinkedIn}>LinkedIn</a>
                            </div>
                          </>
                        )}
                        {element.userGithub !== "" && (
                          <div className="col-md experienceTr">
                            <AiFillGithub />{" "}
                            <a href={element.userGithub}>Github</a>
                          </div>
                        )}
                      </span>
                    </>
                  ))
                ) : (
                  <>
                    <div className="row">
                      <div className="col-md experienceTr">
                        <AiOutlineMail /> someone@example.com
                      </div>
                      <div className="col-md experienceTr">
                        <AiOutlineMobile /> +92 1234567789
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md experienceTr">
                        <FaLinkedin /> LinkedIn URL
                      </div>
                      <div className="col-md experienceTr">
                        <AiFillGithub /> Github URL
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Personal Project Area */}
              <div className="row">
                <div className="col-12 mt-3 mb-2">
                  <button
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "18px",
                      fontFamily: "serif",
                    }}
                  >
                    <Link to="/personalProjects">
                      <FaPencilAlt /> Add Projects.
                    </Link>
                  </button>
                </div>
                <div className="col-12">
                  {getProjectValues ? (
                    getProjectValues.map((element, index) => (
                      <div key={index}>
                        <div className="row">
                          <div className="col-md experienceTr">
                            Project Name: {element.projectName}
                          </div>
                          {element.clientName !== "" && (
                            <div className="col-md experienceTr">
                              Client Name: {element.clientName}
                            </div>
                          )}
                        </div>
                        {element.projectURL !== "" && (
                          <div className="row">
                            <div className="col experienceTr">
                              Project Link:{" "}
                              <a
                                href={element.projectURL}
                                style={{
                                  color: "blue",
                                }}
                              >
                                {element.projectURL}
                              </a>
                            </div>
                          </div>
                        )}
                        {element.clientCompanyName !== "" && (
                          <div className="row">
                            <div className="col-md experienceTr">
                              Client Name: {element.clientCompanyName}
                            </div>
                          </div>
                        )}
                        {element.projectDescription !== "" && (
                          <div className="row">
                            <div className="col-md experienceTr">
                              Description: {element.projectDescription}
                            </div>
                          </div>
                        )}
                        <hr />
                      </div>
                    ))
                  ) : (
                    <>
                      <h3>Add Your Projects. </h3>
                      <hr />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
