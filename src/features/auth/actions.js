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
         * @param {object} data reveived api response data
         * @param {string} message
         * @param {number} status
         * @param {boolean} success
         */
        return response.data;
    }catch(error){
        return thunkApi.rejectWithValue(error)
    }
})

