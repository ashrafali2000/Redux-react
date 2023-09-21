import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/sliceCreate";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})