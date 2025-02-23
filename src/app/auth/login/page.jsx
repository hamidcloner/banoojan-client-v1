"use client"
import { Fragment,useEffect,useLayoutEffect, useState } from "react";
// import the custom-hooks
// import the local-components
import MobileLogin from "@/components/auth/MobileLogin";
import OTPlogin from "@/components/auth/OTPlogin";
import {HashLoading} from "@/components/loadings"
import { useSelector } from "react-redux";
import PageParentLoginPageProtected from "@/common/createLoginProtectedRoute";


// show two components Here Based On check state
// 1- input-mobileNumber
// 2- input-OTPcode

function LoginPageContent(){

    const stepOfAuthenticate = useSelector(state => state.auth.stepOfAuthenticate)
    const loading = useSelector(state => state.auth.loading)
    /**
     * @param {Enumerator} stepOfAuthenticate => ["mobile","OTP","completed"]
     */
    
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
        }else if(stepOfAuthenticate === "OTP" && !loading){
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



export default function LoginPage(){
    return (
        <PageParentLoginPageProtected>
            <LoginPageContent />
        </PageParentLoginPageProtected>
    )
}