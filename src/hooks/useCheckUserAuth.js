import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {SendStoragedTokenToAuth} from "@/features/auth/actions";





export default function useCheckUserAuth(){
    const dispatch = useDispatch();
    useEffect(() => {
        const authToken = localStorage.getItem("banooJanAuthToken")
        dispatch(SendStoragedTokenToAuth(authToken))
    },[])
}