import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/Login/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store;