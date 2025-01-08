import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applicants: [],
  },
  reducers: {
    setApplicant: (state, action) => {
      state.applicants = action.payload;
    },
  },
});

export const { setApplicant } = applicationSlice.actions;
export default applicationSlice.reducer;
