import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddSummary = () => {
  let navigate = useNavigate();
  const [summaryInputValues, setSummaryInputValues] = useState({
    summary: "",
  });
  const handleSummary = (e) => {
    const { value, name } = e.target;
    setSummaryInputValues(() => {
      return {
        ...summaryInputValues,
        [name]: value,
      };
    });
  };
  console.log(summaryInputValues);
  const submitSummary = () => {
    const { summary } = summaryInputValues;
    if (summary === "") {
      toast.error("Summary Field can't be empty");
    } else {
      toast.success("Data Added Successfully");
      localStorage.setItem("userSummary", JSON.stringify([summaryInputValues]));
      navigate(`/buildResume`);
    }
  };

  return (
    <div className="container mt-2">
      <h2>Add Summary</h2>
      <p
        style={{
          color: "black",
          fontFamily: "calibri",
          fontSize: "17px",
          letterSpacing: ".8px",
        }}
      >
        Describe your skills and working on that skills in Summary. This will
        help your profile to make more efficient than others. The interest of a
        person could be anything. Like Software Developers are interested in{" "}
        <mark>Database Development</mark>, a businessman is interested in{" "}
        <mark>Business Development</mark> etc. What's your interest?
      </p>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-8 col-lg-8 mx-auto">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Your Interest"
              name="summary"
              onChange={handleSummary}
            />
            <label for="floatingInput">Add Summary</label>
          </div>
        </div>
      </div>
      <div className="row mt-3 mx-auto submit-div">
        <button
          type="submit"
          className="submit__personal-info"
          onClick={submitSummary}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddSummary;
