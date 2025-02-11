import { Fragment } from "react";
import Link from "next/link";
import { Stack,Paper } from "@mui/material";
// import the local-components
import MobileLogin from "@/components/auth/MobileLogin";
import OTPlogin from "@/components/auth/OTPlogin";


// show two components Here Based On check state
// 1- input-mobileNumber
// 2- input-OTPcode

export default function LoginPage(){
    return (
        <Fragment>
            <div className="page-wrapper">
                <MobileLogin />
                {/* <OTPlogin />    */}
            </div>      
        </Fragment>
    )
}