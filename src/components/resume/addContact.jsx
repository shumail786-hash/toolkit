import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddContact = () => {
  let navigate = useNavigate();
  const [addContactInfo, setAddContact] = useState({
    userEmail: "",
    userPhoneNumber: "",
    userLinkedIn: "",
    userGithub: "",
  });
  const handlePersonalInputs = (e) => {
    const { value, name } = e.target;
    setAddContact(() => {
      return {
        ...addContactInfo,
        [name]: value,
      };
    });
  };
  const submitPersonalInfo = () => {
    const { userEmail, userPhoneNumber, userLinkedIn } = addContactInfo;
    if (userEmail === "") {
      toast.error("Email is Required");
    } else if (userPhoneNumber === "") {
      toast.error("Phone Nymber is Required");
    } else {
      toast.success("Data Added Successfully");
      localStorage.setItem("contactInfo", JSON.stringify([addContactInfo]));
      navigate("/buildResume");
    }
  };
  // const validateUrl = (url)=>
  // {
  //   const regEx = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.)))/
  // }
  return (
    <div className="container mt-3">
      <h2>Contact Information</h2>

      <div className="row mt-3">
        <div className="col-md">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Your Email Address"
              name="userEmail"
              onChange={handlePersonalInputs}
            />
            <label for="floatingInput">Your Email Address</label>
          </div>
        </div>
        <div className="col-md">
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="Your Phone Number"
              name="userPhoneNumber"
              onChange={handlePersonalInputs}
            />
            <label for="floatingInput">Phone Number</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md">
          <div class="form-floating mb-3">
            <input
              type="url"
              class="form-control"
              id="floatingInput"
              placeholder="Linked In Profile"
              name="userLinkedIn"
              onChange={handlePersonalInputs}
            />
            <label for="floatingInput">LinkedIn Profile URL </label>
          </div>
        </div>
        <div className="col-md">
          <div class="form-floating mb-3">
            <input
              type="url"
              class="form-control"
              id="floatingInput"
              placeholder="Your Phone Number"
              name="userGithub"
              onChange={handlePersonalInputs}
            />
            <label for="floatingInput">Git Profile URL</label>
          </div>
        </div>
      </div>

      <div className="row mt-3 mx-auto text-center submit-div">
        <button
          type="submit"
          className="submit__personal-info"
          onClick={submitPersonalInfo}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddContact;
