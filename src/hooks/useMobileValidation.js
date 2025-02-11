import { useState,useEffect } from "react";
import {AuthMessages} from "@/common/appUImessages";




export default function useMobileNumberValidation(){

    const Ir_mobileNumber_pattern = /^09\d{9}$/;

    const [mobileNumber,setMobileNumber] = useState("");
    const [isDisable,setIsDisable] = useState(true);
    const [error,setError] = useState({});

    useEffect(() => {
        if(!Ir_mobileNumber_pattern.test(mobileNumber)){
            setIsDisable(true);
            setError({
                mobile_incorrect : AuthMessages?.MobileNumber_Invalid
            })
        }
        if(Ir_mobileNumber_pattern.test(mobileNumber)){
            setIsDisable(false)
        }
    },[mobileNumber])


    

    // define the handlers
    const mobileNumberInputHandler = (e) => {
        setMobileNumber(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return {
        mobileNumber,
        setMobileNumber,
        mobileNumberInputHandler,
        isDisable
    }
}