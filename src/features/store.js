import { configureStore } from "@reduxjs/toolkit";
import authReducers from "@/features/auth/authSlice";
import userReducers from "@/features/User/user.slice";

const rootStore = configureStore({
    reducer : {
        auth : authReducers,
        user : userReducers
    }
})

export default rootStore;