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
    // ======= states using in checkAuth =======
    checkAuthError : null, // just send JWT process error
    loadingUntilChekAuth : true, // just send JWT process loading until receive response (success OR failed)
    isAuthenticated : false, // finally result of authenticate
    verifiedMobile : false, // check step of login => until not send mobileNumber,verifiedMobile is "false" => using in auth/register protectedRoute
    // ===========================================
    error : null,
    loading : false, // true just actions are in "pending" state
    stepOfAuthenticate : "mobile",
    user : {
        mobileNumber : "",
    }
}

const authSlice = createSlice({
    name : AuthTypes.name,
    initialState,
    reducers : {
        resetServerErrorToNull : (state,action) => {
            state.error = null
        }
    },
    extraReducers : (builder) => {
        // ====== check User is Valid and registerd OR Not =====
        builder.addCase(SendStoragedTokenToAuth.fulfilled,(state,action) => {
            state.isAuthenticated = action.payload.isAuthenticated,
            state.verifiedMobile = action.payload.accepteduser.verifiedMobile // using in auth/register ProtectedRoute (OTPinput page => second step of login)
            state.loadingUntilChekAuth = false;
            state.checkAuthError = null;
        })
        builder.addCase(SendStoragedTokenToAuth.pending,(state,action) => {
            state.loadingUntilChekAuth = true,
            state.error = null;
        })
        builder.addCase(SendStoragedTokenToAuth.rejected,(state,action) => {
            state.isAuthenticated = false
            state.loadingUntilChekAuth = false;
            state.verifiedMobile = false;
            state.checkAuthError = getTextMessagesFormAPI(action.payload.errors)
        })
        // ====== SendMobileNumber to get OTP-code =======
        builder.addCase(sendUserMobileNumber.fulfilled,(state,action) => {
            state.loading = false;
            state.user.mobileNumber = action.payload.mobileNumber;
            state.stepOfAuthenticate = "OTP";
            state.error = null;
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
            state.error = null;
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


export const {resetServerErrorToNull} = authSlice.actions;
const authReducers = authSlice.reducer
export default authReducers;