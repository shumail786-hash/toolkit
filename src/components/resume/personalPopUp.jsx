import React from "react";

const PersonalPopUp = (props) => {
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
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPopUp;
