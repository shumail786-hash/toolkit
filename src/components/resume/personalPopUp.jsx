import React, { useState } from "react";

const PersonalPopUp = (props) => {
  const [personalInputValues, setpersonalInputValues] = useState();
  const handlePersonalInputs = (e) => {
    setpersonalInputValues({
      ...personalInputValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(personalInputValues, "inp Val");
  return (
    <div className="popup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleClose}></button>
        <div className="text-center">
          <h2>Personal Information.</h2>
          <div className="row">
            <div className="col-md">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Your Name"
                  name="userName"
                  onChange={handlePersonalInputs}
                />
                <label for="floatingInput">Your Name</label>
              </div>
            </div>
            <div className="col-md">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Your Age"
                  name="userAge"
                  onChange={handlePersonalInputs}
                />
                <label for="floatingInput">Age In Years</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Your Country"
                  name="userCountry"
                  onChange={handlePersonalInputs}
                />
                <label for="floatingInput">Country</label>
              </div>
            </div>
            <div className="col-md">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Your State / City Name"
                  name="userCity"
                  onChange={handlePersonalInputs}
                />
                <label for="floatingInput">State/City Name</label>
              </div>
            </div>
          </div>
          {/* JOB TITLE */}

          <div className="row">
            <div className="col-md">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Your Job Title"
                  name="userJob"
                  onChange={handlePersonalInputs}
                />
                <label for="floatingInput">Current Job Title</label>
              </div>
            </div>
            <div className="col-md">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="userExperience"
                  onChange={handlePersonalInputs}
                >
                  <option selected value="1">
                    1 or Less Than 01 Year
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
                <label for="floatingSelect">Experience In Years</label>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-auto text-center submit-div">
            <button type="submit" className="submit__personal-info">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPopUp;
