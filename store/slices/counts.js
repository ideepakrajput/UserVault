import { createSlice } from "@reduxjs/toolkit";

const countsSlice = createSlice({
    name: "counts",
    initialState: {
        global: 0,
        closeUp: 0,
    },
    reducers: {
        addGlobal: (state) => {
            state.global += 1;
        },
        addCloseUp: (state) => {
            state.closeUp += 1;
        },
    }
})

export const countsActions = countsSlice.actions;

export default countsSlice;