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
export const sendUserFeedbackComment = createAsyncThunk(UserTypes.SEND_USER_FEEDBACK_COMMENT,async ({bodyReqContent : feedbackComment,authToken : token},thunkApi) => {
    // usecase : 
    // useDispatch(sendUserMobileNumber("mentee"))
    /**
     * @param {object} bodyReqContent
     */
    try{
        const response = await userHttpClient.AddUserFeedbackComment(feedbackComment,token);
        console.log("what is response in ACTION : ",response)
        return response;
    }catch(error){
        return thunkApi.rejectWithValue(error)
    }
})