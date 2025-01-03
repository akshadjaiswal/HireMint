import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    isResume: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsResume: (state, action) => {
      state.isResume = action.payload;
    },
  },
});

export const { setLoading, setUser ,setIsResume } = authSlice.actions;
export default authSlice.reducer;
