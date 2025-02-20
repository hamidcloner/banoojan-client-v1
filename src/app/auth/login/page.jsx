"use client"
import { Fragment,useEffect,useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
// import the custom-hooks
import useSpecificSelector from "@/hooks/useSpecificSelector";
// import the local-components
import MobileLogin from "@/components/auth/MobileLogin";
import OTPlogin from "@/components/auth/OTPlogin";
import {HashLoading} from "@/components/loadings"
import { useSelector } from "react-redux";
import useCheckUserAuth from "@/hooks/useCheckUserAuth";
import PageParentLoginPageProtected from "@/common/createLoginProtectedRoute";


// show two components Here Based On check state
// 1- input-mobileNumber
// 2- input-OTPcode

// export default function LoginPage(){
//     useCheckUserAuth()
//     const router = useRouter();
//     const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
//     // console.log("isAuthenticated : ",isAuthenticated)
//     useLayoutEffect(() => {
//         console.log("useLayoutEffect==================")
//         if(isAuthenticated){
//             return router.push("/user/profile")
//         }
//     })
//     useEffect(() => {
//         // if(isAuthenticated){
//         //     router.push("/user/profile")
//         // }
//         if(stepOfAuthenticate === "completed"){
//             router.push("/user/select-skils")
//         }
//     })
    
//     const {stepOfAuthenticate,loading} = useSpecificSelector("auth");
//     const LoginRenderedBasedOnAuthStep = () => {
//         /**
//          * @param {Enumerator} stepOfAuthenticate => ["mobile","OTP","completed"]
//          */
//         if(loading){
//             console.log(`loading : ${loading}  stepOfAuthenticate : ${stepOfAuthenticate} isAuthen : ${isAuthenticated}`)
//             console.log("loading =========")
//             return (
//                 <HashLoading color="#3D2B8E" load={loading}/>
//             )
//         }
//         if(stepOfAuthenticate === "mobile" && !loading && !isAuthenticated){
//             console.log(`loading : ${loading}  stepOfAuthenticate : ${stepOfAuthenticate} isAuthen : ${isAuthenticated}`)
//             console.log("mobile======")
//             return (
//                 <MobileLogin />
//             )
//         }else if(stepOfAuthenticate === "OTP" && !loading && !isAuthenticated){
//             console.log(`loading : ${loading}  stepOfAuthenticate : ${stepOfAuthenticate} isAuthen : ${isAuthenticated}`)
//             console.log("OTPlogin =====")

//             return (
//                 <OTPlogin />
//             )
//         }
    
//     }
//     return (
//         <Fragment>
//             {console.log("========== render =============")}
//             <div className="page-wrapper">
//                 {LoginRenderedBasedOnAuthStep()}
//             </div>      
//         </Fragment>
//     )
// }
















function LoginPageContent(){
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
 
    useEffect(() => {
        if(stepOfAuthenticate === "completed"){
            router.push("/user/select-skils")
        }
    })
    
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