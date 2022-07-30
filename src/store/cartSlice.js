const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const personalInfoData = createSlice({
  name: "personalInfo",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPersonalInfoData.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getPersonalInfoData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getPersonalInfoData.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});
export const { setPersonalInfoData, setStatus } = personalInfoData.actions;
export default personalInfoData.reducer;

// Thunk for getting Personal Info Data

export const getPersonalInfoData = createAsyncThunk(
  "personalInfo/fetch",
  () => {
    const data = localStorage.getItem("personalData");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
);
