"use client"
import React from "react";

import styled from "@/components/auth/OTPholder/otpStyles.module.css";
import { Fragment,useState,useEffect } from "react";



export default function OTPreverseTimer({setOtpExpired}){
    const [min,setMin] = useState(1);
    const [sec,setSec] = useState(59);
    useEffect(() => {
        const timer = setInterval(() => {
            if(sec === 0 && min === 0){
                setOtpExpired(true)
            }
            if(sec === 0){
                setMin((prevState) => prevState - 1)
                setSec(59)
            }
            if(sec > 0) setSec((prevState) => prevState -1)
        },1000)
        return () => {
            clearInterval(timer)
        }
    },[min,sec])


    return (
        <Fragment>
            <div className={`${styled["otp-reverse-timer-container"]}`}>
                <div className="mt-5 mb-5">
                            <span className={styled["otp-reverse-time"]}>{min}</span>{` `}<span className={styled["otp-reverse-time"]}>:</span>{` `}<span className={styled["otp-reverse-time"]}>{sec}</span>
                        </div>   
                </div>
        </Fragment>
    )
}






