import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userAuth',
    initialState: {
        user: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        },
    }
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;