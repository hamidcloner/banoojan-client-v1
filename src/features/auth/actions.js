import { createAsyncThunk } from "@reduxjs/toolkit";
import {AuthTypes} from "@/features/types";
import authHttpClient from "@/api/auth.requests"


export const sendUserMobileNumber = createAsyncThunk(AuthTypes?.SEND_USER_MOBILENUMBER,async (mobileNumber,thunkApi) => {
    // usecase :
    // useDispatch(sendUserMobileNumber("09121111111"))
    try{
        const response = await authHttpClient.SendMobileNumber(mobileNumber);
        /**
         * response
         * @param {MongooseID} _id
         * @param {string} mobileNumber
         * @param {boolean} verifiedMobile
         * @param {Array<string>} favoritesSubjects
         * @param {object} OTPcode 
         */
        return response;
    }catch(error){
        /**
         * error
         * @param {string} message
         * @param {number} status
         * @param {boolean} success
         * @param {object} errors => {}
         */
        return thunkApi.rejectWithValue(error)
    }
})

// usecase:
// useDispatch(SendUserOTPCode("09121111111",2569))
export const SendUserOTPCode = createAsyncThunk(AuthTypes?.SEND_USER_OTP,async ({mobileNumber,otp},thunkApi) => {
    try{
        const response = await authHttpClient.SendOTPcodeToCheckIt(mobileNumber,otp);
        return response
    }catch(error){
        return thunkApi.rejectWithValue(error)
    }
})

