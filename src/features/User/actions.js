import userHttpClient from "@/api/user.requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {UserTypes} from "@/features/types";



export const sendUserSelectedSkils = createAsyncThunk(UserTypes.SEND_USER_SKILS,async ({skils},thunkApi) => {
    // usecase : 
    // useDispatch(sendUserMobileNumber("mentee"))
    try{
        const response = await userHttpClient.AddUserSkil(skils);
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