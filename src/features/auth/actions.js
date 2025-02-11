import { createAsyncThunk } from "@reduxjs/toolkit";
import {AuthTypes} from "@/features/types";
import authHttpClient from "@/api/auth.requests"


export const sendUserMobileNumber = createAsyncThunk(AuthTypes.SEND_USER_MOBILENUMBER,async (mobileNumber,thunkApi) => {
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
        return thunkApi.rejectWithValue(error)
    }
})

