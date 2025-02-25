"use client"
import { useSelector } from "react-redux";
import { Fragment,useEffect,useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageParentLoginPageProtected from "@/common/createLoginProtectedRoute"; // import the /user route protected
// import the custom-hooks
// import the local-components
import MobileLogin from "@/components/auth/MobileLogin";
import OTPreverseTimer from "@/components/auth/OTPholder/OTPreverseTimer";

import OTPlogin from "@/components/auth/OTPlogin";
import {HashLoading} from "@/components/loadings"



// show two components Here Based On check state
// 1- input-mobileNumber
// 2- input-OTPcode

function LoginPageContent(){
    const router = useRouter()

    const stepOfAuthenticate = useSelector(state => state.auth.stepOfAuthenticate)
    const loading = useSelector(state => state.auth.loading)
    /**
     * @param {Enumerator} stepOfAuthenticate => ["mobile","OTP","completed"]
     */
    useEffect(() => {
        if(stepOfAuthenticate === "OTP" && !loading){
            router.push("/auth/register")
        }
    },[stepOfAuthenticate,loading])
    const LoginRenderedBasedOnAuthStep = () => {
        if(loading){
            return (
                <HashLoading color="#3D2B8E" load={loading}/>
            )
        }
        if(stepOfAuthenticate === "mobile" && !loading){
            return (
                <MobileLogin />
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



export default function LoginPage(){
    return (
        <PageParentLoginPageProtected>
            <LoginPageContent />
        </PageParentLoginPageProtected>
    )
}