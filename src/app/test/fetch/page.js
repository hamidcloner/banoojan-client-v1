"use client"
import { useDispatch } from "react-redux";
import {sendUserMobileNumber} from "@/features/auth/actions";
import { useEffect } from "react";
import useSpecificSelector from "@/hooks/useSpecificSelector";
import { indexof } from "stylis";




export default function FetchPage(){
    const {error} = useSpecificSelector("auth");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sendUserMobileNumber("0935732484"))
    },[])

    return (
        <>
            <div>
                {!error ? (
                    <><p>No Error Found</p></>
                ) : (
                    error.map(errorMsg => (
                        <p key={indexof(errorMsg)} className="color-pink-stroke-500 text-xl md:text-2xl">{errorMsg}</p>
                    ))
                )}
            </div>
        </>
    )
}


