import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
    name: "images",
    initialState: {
        global: {
            top: '',
            frontal: '',
            left: '',
            right: '',
        },
        closeUp: {
            top: '',
            frontal: '',
            left: '',
            right: '',
        },
        globalCount: 0,
        closeUpCount: 0,
    },
    reducers: {
        uploadGlobalTop: (state, action) => {
            state.global.top = action.payload;
            state.globalCount += 1;
        },
        uploadGlobalFrontal: (state, action) => {
            state.global.frontal = action.payload;
            state.globalCount += 1;
        },
        uploadGlobalLeft: (state, action) => {
            state.global.left = action.payload;
            state.globalCount += 1;
        },
        uploadGlobalRight: (state, action) => {
            state.global.right = action.payload;
            state.globalCount += 1;
        },
        uploadCloseUpTop: (state, action) => {
            state.closeUp.top = action.payload;
            state.closeUpCount += 1;
        },
        uploadCloseUpFrontal: (state, action) => {
            state.closeUp.frontal = action.payload;
            state.closeUpCount += 1;
        },
        uploadCloseUpLeft: (state, action) => {
            state.closeUp.left = action.payload;
            state.closeUpCount += 1;
        },
        uploadCloseUpRight: (state, action) => {
            state.closeUp.right = action.payload;
            state.closeUpCount += 1;
        },
    }
})

export const imagesActions = imagesSlice.actions;
export default imagesSlice;