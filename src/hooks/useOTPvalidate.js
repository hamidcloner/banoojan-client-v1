/*
    1-check the otp validation:
        - To match exactly 4 digits
        - check expiredTime (2 minutes)
    2-manage is able or disable submit button
*/
import { useState,useEffect } from "react";
import {AuthMessages} from "@/common/appUImessages";
import { useDispatch, useSelector } from "react-redux";
// ==== import actions ========
import { SendUserOTPCode,sendUserMobileNumber } from "@/features/auth/actions"; // async actions
import {resetServerErrorToNull} from "@/features/auth/authSlice";


export default function useOTPvalidate(){
    
    const dispatch = useDispatch();

    // === states from store ====
    const serverError = useSelector(state => state.auth.error);
    const mobileNumber = useSelector(state => state.auth.user.mobileNumber);

    // == define some states for validation ==
    const [otpStatus,setOtpStatus] = useState("send") // => =ENUM=> ["send","re-send"] => {send : defaultStatus,re-send : otpExpired is "True"}
    const [otpExpired,setOtpExpired] = useState(false);
    const [otp,setOTP] = useState("");
    const [error,setError] = useState({}); // client-side error =otp=> must be Number && must has 4-digit
    const [isDisable,setIsDisable] = useState(true);

    const otpCorrectPattern = /^\d{4}$/;

    // == inner-utility-function
    const removeSpecialKey = (objState,specialKey) => {
        const resultObj = {};
        const objStateToArr = Object.entries(objState);
        objStateToArr.forEach(([key,value]) => {
            if(key !== specialKey){
                resultObj[key] = value
            }
        })
        return resultObj;
    }

    useEffect(() => {
        if(otpExpired){
            setOtpStatus("re-send")
            setOTP("")
            dispatch(resetServerErrorToNull())
        }
        if(!otpCorrectPattern.test(otp)){
            setError({otp_invalid : AuthMessages?.OTP_Invalid})
            setIsDisable(true)
        }
        if(otpCorrectPattern.test(otp)){
            setError({})
            setIsDisable(false)
        };
        if(otpCorrectPattern.test(otp) && !otpExpired && Object.keys(error).length === 0){
            setIsDisable(false)
        }

    },[otp,otpExpired,isDisable])

    const inputedOTPHandler = (enteredOTP) => {
        setOTP(enteredOTP)
    }
    function showServerErrorAsText(){
        return (
            <>
                {serverError && (
                    serverError.map((errorMsg) => (
                        <p key={serverError.indexOf(errorMsg)} className="color-pink-stroke-500 text-xl md:text-2xl text-center">
                            {errorMsg}
                        </p>
                    ))
                )}
            </>
        )
    }

    // =========== Submit Handler =====================
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(Object.keys(error).length === 0 && !isDisable && otpStatus === "send"){
            dispatch(SendUserOTPCode({mobileNumber,otp}))
        }else if(otpStatus === "re-send"){
            dispatch(sendUserMobileNumber(mobileNumber))
            setOtpStatus("send")
            setOtpExpired(false)
        }
    } 



    return {
        otpExpired,
        setOtpExpired,
        otp,
        setOTP,
        onSubmitHandler,
        inputedOTPHandler,
        otpStatus,
        setOtpStatus,
        showServerErrorAsText,
        setError,
        // each one of follow => show that form can be submit!
        error,
        isDisable
    }
}