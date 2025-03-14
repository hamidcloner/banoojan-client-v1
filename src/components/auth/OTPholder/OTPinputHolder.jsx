"use client"
import OtpInput from "react18-input-otp";
import OTPreverseTimer from "@/components/auth/OTPholder/OTPreverseTimer";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import ButtonCTA from "@/components/common/FormWidgets/ButtonCTA"
import {Fragment} from "react";
import { Box, Stack } from "@mui/material";
// import the custom-hooks
import useOTPvalidate from "@/hooks/useOTPvalidate";



export default function OTPinputHolder(){

    const {otp,setOTP,otpExpired,setOtpExpired,onSubmitHandler,setError,inputedOTPHandler,isDisable,otpStatus,showServerErrorAsText,setOtpStatus} = useOTPvalidate();
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
                        {!otpExpired ? (
                            <OTPreverseTimer 
                                otpExpired={otpExpired}
                                setOtpExpired={setOtpExpired}
                                setOtpStatus={setOtpStatus}
                                setError={setError}
                                setOTP={setOTP}
                            
                        />) : (
                                <>
                                    <div className="mt-10 mb-5">
                                        <div className="text-center my-0 mx-auto flex justify-center">
                                            <SentimentDissatisfiedIcon className="dark:stroke-pink-500 text-[50px]"/>
                                        </div>
                                        <p className="text-center font-aviny color-pink-light mt-5 mb-5">وقت تموم شد یخورده عجله کن!اگر کد نیومد اون پایین برام پیام بده</p>
                                    </div>
                                </>
                            )}                      
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