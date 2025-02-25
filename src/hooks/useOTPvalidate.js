/*
    1-check the otp validation:
        - To match exactly 4 digits
        - check expiredTime (2 minutes)
    2-manage is able or disable submit button
*/
import { useState,useEffect } from "react";
import {AuthMessages} from "@/common/appUImessages";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import useSpecificSelector from "./useSpecificSelector";
// ==== import actions ========
import { SendUserOTPCode } from "@/features/auth/actions";


export default function useOTPvalidate(){
    // =============
    const dispatch = useDispatch();
    const router = useRouter()
    const {stepOfAuthenticate,error : serverError,user : {mobileNumber}} = useSpecificSelector("auth")
    // selector = {otp : "",mobileNumber : ""}
    // =============
    const [otpStatus,setOtpStatus] = useState("send") // => =ENUM=> ["send","re-send"] => {send : defaultStatus,re-send : otpExpired is "True"}
    const [otpExpired,setOtpExpired] = useState(false);
    const [otp,setOTP] = useState("");
    const [error,setError] = useState({});
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
    // =======

    useEffect(() => {
        if(otpExpired){
            setError((prevState) => ({
                ...prevState,
                otp_expired : AuthMessages?.OTP_Expired
            }));
            setOtpStatus("re-send")
        }
        if(!otpCorrectPattern.test(otp)) setError((prevState) => ({
            ...prevState,
            otp_invalid : AuthMessages?.OTP_Invalid
        }))
        if(otpCorrectPattern.test(otp)) setError((prevState) => removeSpecialKey(prevState,"otp_invalid"));

        // when submit button is enable => just:
        if(otpCorrectPattern.test(otp) && !otpExpired) setIsDisable(false)

    },[otp,otpExpired,isDisable])

    const inputedOTPHandler = (enteredOTP) => {
        setOTP(enteredOTP)
    }
    function showServerErrorAsText(){
        return (
            <>
                {!serverError ? (
                    <></>
                ) : (
                    serverError.map((errorMsg) => (
                        <p key={serverError.indexOf(errorMsg)} className="color-pink-stroke-500 text-xl md:text-2xl text-center">
                            {errorMsg}
                        </p>
                    ))
                )}
            </>
        )
    }


    const onSubmitHandler = (e) => {
        console.log("e shod ke!")
        e.preventDefault();
        if(Object.keys(error).length === 0 && !isDisable){
            dispatch(SendUserOTPCode({mobileNumber,otp}))
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
        showServerErrorAsText,
        // each one of follow => show that form can be submit!
        error,
        isDisable
    }
}