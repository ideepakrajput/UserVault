import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    uploading: false,
    uploaded: false,
    global: {
        bottomTab: 'TOP',
    },
    closeUp: {
        bottomTab: 'TOP',
    },
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
            if (state.isGlobal) {
                state.global.bottomTab = action.payload;
            } else {
                state.closeUp.bottomTab = action.payload;
            }
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