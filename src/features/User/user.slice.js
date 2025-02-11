import { UserTypes } from "@/features/types";
import { createSlice } from "@reduxjs/toolkit";
// ==== test (async actions) ====
import {getUserInfo} from "@/features/User/actions";


const initialState = {
    list : [],
    error : "",
    loading : true
}



const userSlice = createSlice({
    name : UserTypes.name,
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getUserInfo.fulfilled,(state,action) => {
            state.list = action.payload.data;
            state.loading = false;
        });
        builder.addCase(getUserInfo.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
            // alert("Error : ",action.payload)
            
            
        })

    }
})



export default userSlice.reducer