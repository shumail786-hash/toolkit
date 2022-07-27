import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/header/header";
import Resume from "./components/resume/resume";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
