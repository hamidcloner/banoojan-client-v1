import { UserTypes } from "@/features/types";
import { createSlice } from "@reduxjs/toolkit";
import { getTextMessagesFormAPI } from "@/utils";
// === import actions 
import {sendUserSelectedSkils} from "@/features/User/actions";

const initialState = {
    /**
     * @param {object} userInfo
     * @param {boolean} loading
     * @param {Array<string>} error 
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
        builder.addCase(sendUserSelectedSkils.fulfilled,(state,action) => {
            state.loading = false;
            state.userInfo.skil = action.payload.skil;
        })
        builder.addCase(sendUserSelectedSkils.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(sendUserSelectedSkils.rejected,(state,action) => {
            state.loading = false;
            state.error = getTextMessagesFormAPI(action.payload.errors)
        })
    }
    

})







export default userSlice.reducer