import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/header/header";
import Resume from "./components/resume/resume";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalPopUp from "./components/resume/personalPopUp";
import InterestPopup from "./components/resume/interestPopup";
import ChangeAvatar from "./components/resume/changeAvatar";
import Education from "./components/resume/education";
import AddSummary from "./components/resume/addSummary";
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/buildResume" element={<Resume />}></Route>
            <Route path="/interest" element={<InterestPopup />}></Route>
            <Route path="/personal" element={<PersonalPopUp />}></Route>
            <Route path="/changeAvatar" element={<ChangeAvatar />}></Route>
            <Route path="/addEducation" element={<Education />}></Route>
            <Route path="/addSummary" element={<AddSummary />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
