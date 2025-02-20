// "use client"
import { createSlice } from "@reduxjs/toolkit";
import {AuthTypes} from "@/features/types";
// === import the asycn actions ====
import {sendUserMobileNumber,SendUserOTPCode,SendStoragedTokenToAuth} from "@/features/auth/actions";
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
    loading : false, // true just actions are in "pending" state
    stepOfAuthenticate : "mobile",
    isAuthenticated : false, // using in protected route
    user : {
        mobileNumber : "",
    }
}

const authSlice = createSlice({
    name : AuthTypes.name,
    initialState,
    extraReducers : (builder) => {
        // ====== check User is Valid and registerd OR Not =====
        builder.addCase(SendStoragedTokenToAuth.fulfilled,(state,action) => {
            state.isAuthenticated = action.payload.isAuthenticated
        })
        builder.addCase(SendStoragedTokenToAuth.rejected,(state,action) => {
            // state.error = getTextMessagesFormAPI(action.payload.errors)
            state.error = null;
            state.loading = false
        })
        // ====== SendMobileNumber to get OTP-code =======
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
        // ====== SendOTPcode to authenticate! =======
        builder.addCase(SendUserOTPCode.fulfilled,(state,action) => {
            state.stepOfAuthenticate = "completed";
            state.isAuthenticated = true;
            localStorage.setItem("banooJanAuthToken",action.payload.data.access_token)
            state.loading = false;
            // ==== add to state.user
        })
        builder.addCase(SendUserOTPCode.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(SendUserOTPCode.rejected,(state,action) => {
            state.loading = false;
            state.error = getTextMessagesFormAPI(action.payload.errors)
        })
    },
})


export const {setTestUserTest,setTestOTPcode} = authSlice.actions;
const authReducers = authSlice.reducer
export default authReducers;