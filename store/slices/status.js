import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    uploading: false,
    uploaded: false,
    bottomTab: 'TOP',
    isGlobal: true,
};
const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        setUploading: (state, action) => {
            state.uploading = action.payload;
        },
        setUploaded: (state, action) => {
            state.uploaded = action.payload;
        },
        setBottomTab: (state, action) => {
            state.bottomTab = action.payload;
        },
        toggleIsGlobal: (state, action) => {
            state.isGlobal = action.payload;
        },
        reset: () => {
            return initialState
        }
    }
})

export const statusActions = statusSlice.actions;
export default statusSlice;