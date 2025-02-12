import { useState,useEffect } from "react";
import {AuthMessages} from "@/common/appUImessages";
import { useDispatch,useSelector } from "react-redux";
// ==== import the actions
import {sendUserMobileNumber} from "@/features/auth/actions";





export default function useMobileNumberValidation(){

    const Ir_mobileNumber_pattern = /^09\d{9}$/;
    const dispatch = useDispatch();
    const [mobileNumber,setMobileNumber] = useState("");
    const [isDisable,setIsDisable] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        if(!Ir_mobileNumber_pattern.test(mobileNumber)){
            setIsDisable(true);
            setError({
                mobile_incorrect : AuthMessages?.MobileNumber_Invalid
            })
        }
        if(Ir_mobileNumber_pattern.test(mobileNumber)){
            setIsDisable(false)
            setError(null)
        }
    },[mobileNumber])


    

    // define the handlers
    const mobileNumberInputHandler = (e) => {
        setMobileNumber(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(!error && !isDisable){
            dispatch(sendUserMobileNumber(mobileNumber))
        }
    }

    return {
        mobileNumber,
        setMobileNumber,
        mobileNumberInputHandler,
        isDisable,
        error,
        onSubmitHandler
    }
}