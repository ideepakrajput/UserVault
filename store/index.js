import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./slices/images";
import countsSlice from "./slices/counts";
import statusSlice from "./slices/status";
import authSlice from "./slices/auth";

const store = configureStore({
    reducer: {
        images: imagesSlice.reducer,
        counts: countsSlice.reducer,
        status: statusSlice.reducer,
        auth: authSlice.reducer,
    }
});

export default store;