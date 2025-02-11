import userHttpClient from "@/api/user.requests";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {UserTypes} from "@/features/types";

// ========== test ================
export const getUserInfo = createAsyncThunk(UserTypes.GET_USER_INFO,async (arg,thunkApi) => {
    try{
        const result = await userHttpClient.Get();
        console.log("==== Result ===== : ",result)
        return result;
    }catch(error){
        console.log("==== Error ====",error)
        return thunkApi.rejectWithValue(error.response.data.message)
    }
})
// ===============================