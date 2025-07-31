import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-check";


const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store;