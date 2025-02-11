"use client"
import { createSlice } from "@reduxjs/toolkit";
import {AuthTypes} from "@/features/types";
// === import the asycn actions ====
import {sendUserMobileNumber} from "@/features/auth/actions"

const initialState = {
    error : null,
    loading : true,
    syncUserTest : "",
    user : {
        otp : "", // این نیازی نیست چون براش sms مبشه
        mobileNumber : ""
    }
}

const authSlice = createSlice({
    name : AuthTypes.name,
    initialState,
    extraReducers : (builder) => {
        builder.addCase(sendUserMobileNumber.fulfilled,(state,action) => {
            state.loading = false;
            state.user.otp = action.payload.OTPcode.code;
        })
    },
})


export const {setTestUserTest,setTestOTPcode} = authSlice.actions;
const authReducers = authSlice.reducer
export default authReducers;