// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const InterestPopUp = (props) => {
//   const [interestInputValues, setinterestInputValues] = useState({
//     interest: "",
//   });
//   const handleInterest = (e) => {
//     const { value, name } = e.target;
//     setinterestInputValues(() => {
//       return {
//         ...interestInputValues,
//         [name]: value,
//       };
//     });
//   };
//   const submitInterestInfo = () => {
//     const { interest } = interestInputValues;
//     if (interest === "") {
//       toast.error("Interest Field is Required");
//     } else {
//       toast.success("Data Added Successfully");
//       localStorage.setItem(
//         "userInterest",
//         JSON.stringify([interestInputValues])
//       );

//       props.handleClose();
//     }
//   };

//   return (
//     <div className="popup-box">
//       <div className="box">
//         <button className="btn-close" onClick={props.handleClose}></button>
//         <div className="text-center">
//           <h2>Your Interest.</h2>
//           <div className="row border mx-auto mt-3">
//             <p
//               style={{
//                 color: "black",
//                 fontFamily: "calibri",
//               }}
//             >
//               The interest of a person could be anything. Like Software
//               Developers are interested in <mark>Database Development</mark>, a
//               businessman is interested in <mark>Business Development</mark>{" "}
//               etc. What's your interest?
//             </p>
//           </div>
//           <div className="row mt-4">
//             <div className="col-sm-12 col-md-8 col-lg-8 mx-auto">
//               <div class="form-floating mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="floatingInput"
//                   placeholder="Your Interest"
//                   name="interest"
//                   onChange={handleInterest}
//                 />
//                 <label for="floatingInput">Your Interest</label>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-3 mx-auto submit-div">
//             <button
//               type="submit"
//               className="submit__personal-info"
//               onClick={submitInterestInfo}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterestPopUp;
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const InterestPopup = () => {
  let navigate = useNavigate();
  const [interestInputValues, setinterestInputValues] = useState({
    interest: "",
  });
  const handleInterest = (e) => {
    const { value, name } = e.target;
    setinterestInputValues(() => {
      return {
        ...interestInputValues,
        [name]: value,
      };
    });
  };
  const submitInterestInfo = () => {
    const { interest } = interestInputValues;
    if (interest === "") {
      toast.error("Interest Field is Required");
    } else {
      toast.success("Data Added Successfully");
      localStorage.setItem(
        "userInterest",
        JSON.stringify([interestInputValues])
      );
      navigate(`/buildResume`);
    }
  };

  return (
    <div className="container mt-2">
      <h2>Your Interest</h2>
      <p
        style={{
          color: "black",
          fontFamily: "calibri",
          fontSize: "17px",
          letterSpacing: ".8px",
        }}
      >
        The interest of a person could be anything. Like Software Developers are
        interested in <mark>Database Development</mark>, a businessman is
        interested in <mark>Business Development</mark> etc. What's your
        interest?
      </p>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-8 col-lg-8 mx-auto">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Your Interest"
              name="interest"
              onChange={handleInterest}
            />
            <label for="floatingInput">Your Interest</label>
          </div>
        </div>
      </div>
      <div className="row mt-3 mx-auto submit-div">
        <button
          type="submit"
          className="submit__personal-info"
          onClick={submitInterestInfo}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InterestPopup;
