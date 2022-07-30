import { configureStore } from "@reduxjs/toolkit";
import personalInfo from "./cartSlice";
const store = configureStore({
  reducer: {
    personalDataLS: personalInfo,
  },
});
export default store;
