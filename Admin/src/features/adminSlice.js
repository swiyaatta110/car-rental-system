import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'adminAuth',
  initialState: {
    admin: null,
  },
  reducers: {
    loginAdmin: (state, action) => {
      state.admin = action.payload;
    },
    logoutAdmin: (state) => {
      state.admin = null;
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminSlice.actions;

export default adminSlice.reducer;
