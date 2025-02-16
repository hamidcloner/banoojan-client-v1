"use client"
import { useDispatch } from "react-redux";
import {sendUserSelectedSkils} from "@/features/User/actions";
import { useEffect } from "react";




export default function SendPage(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sendUserSelectedSkils("mentee"))
    })
    return (
        <>
            <div>

            </div>
        </>
    )
}