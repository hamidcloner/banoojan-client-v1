"use client"
import { Fragment } from "react";
// import the custom-hooks
import useSpecificSelector from "@/hooks/useSpecificSelector";
// import the local-components
import MobileLogin from "@/components/auth/MobileLogin";
import OTPlogin from "@/components/auth/OTPlogin";


// show two components Here Based On check state
// 1- input-mobileNumber
// 2- input-OTPcode

export default function LoginPage(){
    const {stepOfAuthenticate} = useSpecificSelector("auth");
    const LoginRenderedBasedOnAuthStep = () => {
        /**
         * @param {Enumerator} stepOfAuthenticate => ["mobile","OTP","completed"]
         */
        if(stepOfAuthenticate === "mobile"){
            return (
                <MobileLogin />
            )
        }else if(stepOfAuthenticate === "OTP"){
            return (
                <OTPlogin />
            )
        }
    
    }
    return (
        <Fragment>
            <div className="page-wrapper">
                {LoginRenderedBasedOnAuthStep()}
            </div>      
        </Fragment>
    )
}