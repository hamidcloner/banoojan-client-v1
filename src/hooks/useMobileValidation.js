import { useState,useEffect } from "react";
import {AuthMessages} from "@/common/appUImessages";
import { useDispatch } from "react-redux";
// ==== import the custom-hook
import useSpecificSelector from "@/hooks/useSpecificSelector";
// ==== import the actions
import {sendUserMobileNumber} from "@/features/auth/actions";





export default function useMobileNumberValidation(){

    const Ir_mobileNumber_pattern = /^09\d{9}$/;
    const {error : serverError} = useSpecificSelector("auth")
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
        onSubmitHandler,
        showServerErrorAsText
    }
}