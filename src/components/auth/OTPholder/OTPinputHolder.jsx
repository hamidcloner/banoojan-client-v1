"use client"
import OtpInput from "react18-input-otp";
import styles from "@/components/auth/OTPholder/otpStyles.module.css";
import OTPreverseTimer from "@/components/auth/OTPholder/OTPreverseTimer";
// import ButtonCTA from "@/components/common/FormWidgets/ButtonCTA";
import ButtonCTA from "@/components/common/FormWidgets/ButtonCTA"
import { useState,Fragment } from "react";
import { Box, Stack,Button } from "@mui/material";
// import the custom-hooks
import useOTPvalidate from "@/hooks/useOTPvalidate";



export default function OTPinputHolder(){

    const {otp,setOTP,otpExpired,setOtpExpired,onSubmitHandler,inputedOTPHandler,error,isDisable,otpStatus,showServerErrorAsText} = useOTPvalidate();
    // otpStatus =ENUM=>  {"send" : defaultStatus,"re-send" : otpExpired is "True"}

    const submitButtonGenerate = function(){
        if(otpStatus === "send"){
            return (
                <ButtonCTA 
                    btnTextDisable="!اول کد رو به درستی وارد کن بعد بزن رو من"
                    btnTextEnable="حالا بزن رو من"
                    btnType="submit"
                    btnDisable={isDisable}
                />
            )
        }if(otpStatus === "re-send"){
            return (
                <ButtonCTA 
                    btnTextEnable="یخورده عجله کن،بزن دوباره کد رو ارسال کنم برات"
                    btnType="submit"
                    btnDisable={false}
                />
            )
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <Stack 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={(theme) => ({
                        direction : "ltr",
                    })}
                >
                    <Box>
                        <OtpInput
                            value={otp}
                            onChange={inputedOTPHandler}
                            numInputs={4}
                            inputStyle={{
                                width : "50px",
                                height : "50px",
                                margin : "0 2px",
                                border : "2px solid  #E5a1aa",
                                borderRadius : "10px",
                                fontFamily : "VazirRegular",
                                outline : 0,
                                fontSize : "20px",
                                fontWeight : 700
                            }}
                        />
                    </Box>
                    <Box>
                        <OTPreverseTimer 
                            otpExpired={otpExpired}
                            setOtpExpired={setOtpExpired}
                        />
                    </Box>
                    <Box>
                        {showServerErrorAsText()}
                    </Box>
                    <Box>
                        {submitButtonGenerate()}
                    </Box>
                </Stack>
            </form>
        </Fragment>


    )
    
}