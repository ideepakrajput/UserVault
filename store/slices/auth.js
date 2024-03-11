import { createSlice } from "@reduxjs/toolkit";

const authSlice = new createSlice({
    name: "auth",
    initialState: {
        email: "",
        uid: ""
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setUID: (state, action) => {
            state.uid = action.payload;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;
