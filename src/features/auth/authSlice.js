"use client"
import { createSlice } from "@reduxjs/toolkit";
import {AuthTypes} from "@/features/types";
// === import the asycn actions ====
import {sendUserMobileNumber} from "@/features/auth/actions";
// ==== import the utility function
import {getTextMessagesFormAPI} from "@/utils";

const initialState = {
    /**
     * @param {Array<string> | null} error
     * @param {boolean} loading
     * @param {object} user
     * @param {enum<string>} stepOfAuthenticate "mobile" | "OTP" | "completed"
     */
    error : null, 
    loading : false,
    stepOfAuthenticate : "mobile",
    user : {
        mobileNumber : ""
    }
}

const authSlice = createSlice({
    name : AuthTypes.name,
    initialState,
    extraReducers : (builder) => {
        builder.addCase(sendUserMobileNumber.fulfilled,(state,action) => {
            state.loading = false;
            state.user.mobileNumber = action.payload.mobileNumber;
            state.stepOfAuthenticate = "OTP"
        })
        builder.addCase(sendUserMobileNumber.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(sendUserMobileNumber.rejected,(state,action) => {
            state.loading = false;
            state.error = getTextMessagesFormAPI(action.payload.errors)
        })
    },
})


export const {setTestUserTest,setTestOTPcode} = authSlice.actions;
const authReducers = authSlice.reducer
export default authReducers;