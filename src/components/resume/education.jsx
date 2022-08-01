import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const Education = () => {
  const navigate = useNavigate();

  const [education, setEducation] = useState([
    {
      addEducation: "",
      yearStart: "",
      endYear: "",
      degreeType: "",
    },
  ]);

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        addEducation: "",
        yearStart: "",
        endYear: "",
        degreeType: "",
      },
    ]);
  };
  const handleRemoveEducation = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
    toast.info("Field Removed");
  };

  const handleChangeEducation = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };

  const handleSubmit = () => {
    const [{ addEducation, yearStart, endYear, degreeType }] = education;
    if (addEducation === "") {
      toast.error("Please Provide Institute Name");
    } else if (degreeType === "") {
      toast.error("Please Provide Degree Name");
    } else if (yearStart === "") {
      toast.error("Please Provide Start Date");
    } else if (endYear === "") {
      toast.error("Please Provide End Date");
    } else {
      toast.success("Education Added Successfully");
      localStorage.setItem("education", JSON.stringify(education));
      navigate("/buildResume");
    }
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md ">
          <h1>Add Education</h1>
        </div>
        <div className="col-md text-end">
          {education.map((element, index) => (
            <span key={element}>
              {education.length - 1 === index && (
                <button className="addEducation" onClick={handleAddEducation}>
                  + Add Education
                </button>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="main-div">
        {education.map((element, index) => (
          <div className="row mt-4" key={element.endYear}>
            <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Interest"
                  name="addEducation"
                  value={element.addEducation}
                  onChange={(e) => handleChangeEducation(e, index)}
                />
                <label htmlFor="floatingInput">Institute Name</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Interest"
                  name="degreeType"
                  value={element.degreeType}
                  onChange={(e) => handleChangeEducation(e, index)}
                />
                <label htmlFor="floatingInput">Degree Type</label>
              </div>
            </div>
            <div className="form-floating mb-3 col-sm-12 col-md-6 col-lg-2">
              <input
                type="date"
                name="yearStart"
                className="form-control"
                id="floatingInput"
                value={element.yearStart}
                onChange={(e) => handleChangeEducation(e, index)}
              />
              <label htmlFor="floatingInput">Year Of Start</label>
            </div>
            <div className="form-floating mb-3 col-sm-12 col-md-6 col-lg-2">
              <input
                type="date"
                name="endYear"
                className="form-control"
                id="floatingInput"
                value={element.endYear}
                onChange={(e) => handleChangeEducation(e, index)}
              />
              <label htmlFor="floatingInput">Year Of Completion</label>
            </div>
            <div className="col-2 mx-auto">
              {education.length > 1 && (
                <button className="removeBtn" onClick={handleRemoveEducation}>
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

export default Education;
