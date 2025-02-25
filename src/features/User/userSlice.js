import { UserTypes } from "@/features/types";
import { createSlice } from "@reduxjs/toolkit";
import { getTextMessagesFormAPI } from "@/utils";
// === import actions 
import {sendUserSelectedSkils,sendUserFeedbackComment,getUserFieldsInfo} from "@/features/User/actions";

const initialState = {
    /**
     * @param {object} userInfo
     * @param {boolean} loading
    *  @param {Array<string>} error 
     */
    userInfo : {
        skil : null
    },
    error : null,
    loading : true
}

const userSlice = createSlice({
    name : UserTypes.name,
    initialState,
    extraReducers : (builder) => {
        // =========== send skil
        builder.addCase(sendUserSelectedSkils.fulfilled,(state,action) => {
            state.loading = false;
            state.userInfo.skil = action.payload.skil;
            state.error = null;
        })
        builder.addCase(sendUserSelectedSkils.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(sendUserSelectedSkils.rejected,(state,action) => {
            state.loading = false;
            state.error = getTextMessagesFormAPI(action.payload.errors)
        })
        // ========== send feedback comment
        builder.addCase(sendUserFeedbackComment.fulfilled,(state,action) => {
            state.loading = false;
            state.error = null
        })
        builder.addCase(sendUserFeedbackComment.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(sendUserFeedbackComment.rejected,(state,action) => {
            state.loading = false;
            state.error = getTextMessagesFormAPI(action.payload.errors)
        })
        // ====== get user specific fields 
        builder.addCase(getUserFieldsInfo.fulfilled,(state,action) => {
            console.log("=========================> action : ",action)
            state.userInfo.skil = action.payload.data.user.skil;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(getUserFieldsInfo.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(getUserFieldsInfo.rejected,(state,action) => {
            state.loading = false;
            state.error = getTextMessagesFormAPI(action.payload.errors)
        })


    }

    
    

})







export default userSlice.reducer