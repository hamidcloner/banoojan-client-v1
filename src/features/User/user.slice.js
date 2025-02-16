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
    userInfo : null,
    error : null,
    loading : true
}

const userSlice = createSlice({
    name : UserTypes.name,
    initialState,
    extraReducers : (builder) => {
        builder.addCase(sendUserSelectedSkils.fulfilled,(state,action) => {
            state.loading = false;
        })
        builder.addCase(sendUserSelectedSkils.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(sendUserSelectedSkils.rejected,(state,action) => {
            state.loading = false;
        })
    }
    

})







export default userSlice.reducer