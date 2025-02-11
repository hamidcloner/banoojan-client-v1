import { createAsyncThunk } from "@reduxjs/toolkit";
import {AuthTypes} from "@/features/types";
import authHttpClient from "@/api/auth.requests"


export const sendUserMobileNumber = createAsyncThunk(AuthTypes.SEND_USER_MOBILENUMBER,async (mobileNumber,thunkApi) => {
    try{
        const response = await authHttpClient.SendMobileNumber(mobileNumber);
        console.log("in asycn Action : ",response)
        return response;
    }catch(error){
        return thunkApi.rejectWithValue(error)
    }
})

