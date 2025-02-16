import userHttpClient from "@/api/user.requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {UserTypes} from "@/features/types";



export const sendUserSelectedSkils = createAsyncThunk(UserTypes.SEND_USER_SKILS,async ({bodyReqContent : skil,authToken : token},thunkApi) => {
    // usecase : 
    // useDispatch(sendUserMobileNumber("mentee"))
    /**
     * @param {object} bodyReqContent
     */
    try{
        console.log("actions => skils : ",skil);
        console.log("action => token : ",token)
        const response = await userHttpClient.AddUserSkil(skil,token);
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