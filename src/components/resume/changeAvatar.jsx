import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ChangeAvatar = () => {
  let navigate = useNavigate();
  const [imageSelected, setImageSelected] = useState("");

  function handleImage() {
    if (imageSelected === "") {
      toast.error("Please Add Profile Pic");
    } else {
      // console.log(imageSelected, "selected");
      const reader = new FileReader();
      reader.onload = function () {
        localStorage.setItem("avatar", reader.result);
        // console.log(reader.result);
      };
      reader.readAsDataURL(imageSelected);
      toast.success("Image Uploaded Successfully");
    }
  }
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <h1>Change Your Avatar</h1>
      <div className="row mx-auto text-center">
        <div className="col-md">
          <input
            type="file"
            onChange={(e) => setImageSelected(e.target.files[0])}
            name="img"
          />
          <button onClick={handleImage} className="changeAvatar">
            Submit
          </button>
          <div className="mt-3">
            <button onClick={handleNavigate} className="changeAvatar">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeAvatar;
