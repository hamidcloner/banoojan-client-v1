/*
    1-check the otp validation:
        - To match exactly 4 digits
        - check expiredTime (2 minutes)
    2-manage is able or disable submit button
*/
import { useState,useEffect } from "react";
import {AuthMessages} from "@/common/appUImessages";
import { useDispatch,useSelector } from "react-redux";
// ==== import actions ========
import {setTestOTPcode} from "@/features/auth/authSlice";

export default function useOTPvalidate(){
    // =============
    const selector = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
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
        console.log("appState : ",selector)
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

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // dispatch(setTestOTPcode({otp}))

        if(Object.keys(error) === 0 && !isDisable) return alert(`${otp} was sent successFully!`)
    } 
    const inputedOTPHandler = (enteredOTP) => {
        setOTP(enteredOTP)
    }


    return {
        otpExpired,
        setOtpExpired,
        otp,
        setOTP,
        onSubmitHandler,
        inputedOTPHandler,
        otpStatus,
        // each one of follow => show that form can be submit!
        error,
        isDisable
    }
}