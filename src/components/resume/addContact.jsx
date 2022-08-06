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
  const [isValid, setIsValid] = useState(false);
  const [isGitValid, setIsGitValid] = useState(false);
  const handlePersonalInputs = (e) => {
    const { value, name } = e.target;
    setAddContact(() => {
      return {
        ...addContactInfo,
        [name]: value,
      };
    });
  };
  const validateUrl = (userLinkedIn) => {
    const regEx =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return regEx.test(userLinkedIn);
  };
  const validateGitUrl = (userGithub) => {
    const regEx =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return regEx.test(userGithub);
  };
  const submitPersonalInfo = () => {
    const { userEmail, userPhoneNumber, userLinkedIn, userGithub } =
      addContactInfo;
    const isValid = validateUrl(userLinkedIn);
    const isGitValid = validateGitUrl(userGithub);
    if (userEmail === "") {
      toast.error("Email is Required");
    }
    if (userPhoneNumber === "") {
      toast.error("Phone Nymber is Required");
    }
    if (userLinkedIn === "") {
      localStorage.setItem("contactInfo", JSON.stringify([addContactInfo]));
      navigate("/buildResume");
    }
    if (!isValid) {
      toast.warn("LinkedIn URL is Incorrect");
    }
    if (userGithub === "") {
      localStorage.setItem("contactInfo", JSON.stringify([addContactInfo]));
      navigate("/buildResume");
    }
    if (!isGitValid) {
      toast.warn("GitHub URL is Incorrect");
    } else {
      setIsValid(isValid);
      setIsGitValid(isGitValid);
      toast.success("Data Added Successfully");
      localStorage.setItem("contactInfo", JSON.stringify([addContactInfo]));
      navigate("/buildResume");
    }
  };
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
