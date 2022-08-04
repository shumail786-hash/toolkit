import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const AddWorkExperience = () => {
  const navigate = useNavigate();

  const [workExperience, setWorkExperience] = useState([
    {
      companyName: "",
      totalYears: "",
      jobTitle: "",
    },
  ]);

  const handleAddExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        companyName: "",
        totalYears: "",
        jobTitle: "",
      },
    ]);
  };
  const handleRemoveExperience = (index) => {
    const list = [...workExperience];
    list.splice(index, 1);
    setWorkExperience(list);
    toast.info("Field Removed");
  };

  const handleChangeExperience = (e, index) => {
    const { name, value } = e.target;
    const list = [...workExperience];
    list[index][name] = value;
    setWorkExperience(list);
  };

  const handleSubmit = () => {
    const [{ companyName, totalYears, jobTitle }] = workExperience;
    if (companyName === "") {
      toast.error("Please Provide Company Name");
    } else if (totalYears === "") {
      toast.error("Please Provide Experience Years");
    } else if (jobTitle === "") {
      toast.error("Please Provide Job Title");
    } else {
      toast.success("Experience Added Successfully");
      localStorage.setItem("experience", JSON.stringify(workExperience));
      navigate("/buildResume");
    }
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md ">
          <h1>Add Experience</h1>
        </div>
        <div className="col-md text-end">
          {workExperience.map((element, index) => (
            <span key={element}>
              {workExperience.length - 1 === index && (
                <button className="addEducation" onClick={handleAddExperience}>
                  + Add Experience
                </button>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="main-div">
        {workExperience.map((element, index) => (
          <div className="row mt-4" key={index}>
            <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Interest"
                  name="companyName"
                  value={element.companyName}
                  onChange={(e) => handleChangeExperience(e, index)}
                />
                <label htmlFor="floatingInput">Company Name</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Interest"
                  name="totalYears"
                  value={element.totalYears}
                  onChange={(e) => handleChangeExperience(e, index)}
                />
                <label htmlFor="floatingInput">Total Years</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Job Title"
                  name="jobTitle"
                  value={element.jobTitle}
                  onChange={(e) => handleChangeExperience(e, index)}
                />
                <label htmlFor="floatingInput">Job Title</label>
              </div>
            </div>

            <div className="col-2 mx-auto">
              {workExperience.length > 1 && (
                <button className="removeBtn" onClick={handleRemoveExperience}>
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-3">
        <div className="mx-auto text-center">
          <button className="submit__personal-info" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWorkExperience;
