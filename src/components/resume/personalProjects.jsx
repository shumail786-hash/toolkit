import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const PersonalProjects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    {
      projectName: "",
      projectURL: "",
      clientName: "",
      clientCompanyName: "",
      projectDescription: "",
    },
  ]);

  const handleAddEducation = () => {
    setProjects([
      ...projects,
      {
        projectName: "",
        projectURL: "",
        clientName: "",
        clientCompanyName: "",
        projectDescription: "",
      },
    ]);
  };
  const handleRemoveProject = (index) => {
    const list = [...projects];
    list.splice(index, 1);
    setProjects(list);
    toast.info("Field Removed");
  };

  const handleChangeProject = (e, index) => {
    const { name, value } = e.target;
    const list = [...projects];
    list[index][name] = value;
    setProjects(list);
  };

  const handleSubmit = () => {
    const [{ projectName }] = projects;
    if (projectName === "") {
      toast.error("Please Provide Project Name");
    } else {
      toast.success("Project Added Successfully");
      localStorage.setItem("projects", JSON.stringify(projects));
      navigate("/buildResume");
    }
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md ">
          <h1>Add Projects</h1>
        </div>
        <div className="col-md text-end">
          {projects.map((element, index) => (
            <span key={element}>
              {projects.length - 1 === index && (
                <button className="addEducation" onClick={handleAddEducation}>
                  + Add Projects
                </button>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="main-div">
        {projects.map((element, index) => (
          <>
            <div className="row mt-4" key={index}>
              <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Add Project Name"
                    name="projectName"
                    value={element.projectName}
                    onChange={(e) => handleChangeProject(e, index)}
                  />
                  <label htmlFor="floatingInput">Project Name</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    type="url"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Your Interest"
                    name="projectURL"
                    value={element.projectURL}
                    onChange={(e) => handleChangeProject(e, index)}
                  />
                  <label htmlFor="floatingInput">Project URL</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Project Description"
                    name="projectDescription"
                    value={element.projectDescription}
                    onChange={(e) => handleChangeProject(e, index)}
                  />
                  <label htmlFor="floatingInput">Project Description</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Client Name"
                    name="clientName"
                    value={element.clientName}
                    onChange={(e) => handleChangeProject(e, index)}
                  />
                  <label htmlFor="floatingInput">Client Name</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mx-auto">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Client Company Name"
                    name="clientCompanyName"
                    value={element.clientCompanyName}
                    onChange={(e) => handleChangeProject(e, index)}
                  />
                  <label htmlFor="floatingInput">Client Company Name</label>
                </div>
              </div>
              <div className="col-3 mx-auto">
                {projects.length > 1 && (
                  <button className="removeBtn" onClick={handleRemoveProject}>
                    Remove
                  </button>
                )}
              </div>
            </div>
          </>
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

export default PersonalProjects;

{
  /* */
}
