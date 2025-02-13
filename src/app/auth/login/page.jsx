"use client"
import { Fragment } from "react";
// import the custom-hooks
import useSpecificSelector from "@/hooks/useSpecificSelector";
// import the local-components
import MobileLogin from "@/components/auth/MobileLogin";
import OTPlogin from "@/components/auth/OTPlogin";
import {HashLoading} from "@/components/loadings"


// show two components Here Based On check state
// 1- input-mobileNumber
// 2- input-OTPcode

export default function LoginPage(){
    const {stepOfAuthenticate,loading} = useSpecificSelector("auth");
    const LoginRenderedBasedOnAuthStep = () => {
        /**
         * @param {Enumerator} stepOfAuthenticate => ["mobile","OTP","completed"]
         */
        if(loading){
            return (
                <HashLoading color="#3D2B8E" load={loading}/>
            )
        }
        if(stepOfAuthenticate === "mobile" && !loading){
            return (
                <MobileLogin />
            )
        }else if(stepOfAuthenticate === "OTP" && !loading){
            return (
                <OTPlogin />
            )
        }
    
    }
    return (
        <Fragment>
            {console.log()}
            <div className="page-wrapper">
                {LoginRenderedBasedOnAuthStep()}
            </div>      
        </Fragment>
    )
}