const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const cartSlice = createSlice({
  name: "personalInfo",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
