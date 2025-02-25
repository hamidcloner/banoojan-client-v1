"use client"
import React from "react";

import styled from "@/components/auth/OTPholder/otpStyles.module.css";
import { Fragment,useState,useEffect } from "react";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';


// ============ قبلی

// export default function OTPreverseTimer({otpExpired,setOtpExpired}){
//     const [min,setMin] = useState(1);
//     const [sec,setSec] = useState(59);
//     useEffect(() => {
//         const timer = setInterval(() => {
//             if(sec === 0 && min === 0) setOtpExpired(true)
//             if(sec === 0){
//                 setMin((prevState) => prevState - 1)
//                 setSec(59)
//             }
//             if(sec > 0) setSec((prevState) => prevState -1)
//         },1000)
//         return () => {
//             clearInterval(timer)
//         }
//     },[min,sec])


//     return (
//         <Fragment>
//             <div className={`${styled["otp-reverse-timer-container"]}`}>
//                 {!otpExpired ? 
//                     (<>
//                         <div className="mt-5 mb-5">
//                             <span className={styled["otp-reverse-time"]}>{min}</span>{` `}<span className={styled["otp-reverse-time"]}>:</span>{` `}<span className={styled["otp-reverse-time"]}>{sec}</span>
//                         </div>
//                     </>) : 
//                             (<>
//                                 <div className="mt-10 mb-5">
//                                     <div className="text-center my-0 mx-auto flex justify-center">
//                                         <SentimentDissatisfiedIcon className="dark:stroke-pink-500 text-[50px]"/>
//                                     </div>
//                                     <p className="text-center font-aviny color-pink-light mt-5 mb-5">وقت تموم شد یخورده عجله کن!اگر کد نیومد اون پایین برام پیام بده</p>
//                                 </div>

//                             </>
//                     )
//                 }      
//             </div>
//         </Fragment>
//     )
// }








export function OTPreverseTimer({otpExpired,setOtpExpired}){
    const [min,setMin] = useState(1);
    const [sec,setSec] = useState(59);
    useEffect(() => {
        const timer = setInterval(() => {
            if(sec === 0 && min === 0) setOtpExpired(true)
            if(sec === 0){
                setMin((prevState) => prevState - 1)
                setSec(59)
            }
            if(sec > 0) setSec((prevState) => prevState -1)
        },1000)
        return () => {
            clearInterval(timer)
        }
    },[min,sec])

    useEffect(() => {
        console.log("خود اصلی mount شد")
        return () => {
            console.log("خود اصلی UNMOUNT شد")
        }
    },[])


    return (
        <Fragment>
            <div className={`${styled["otp-reverse-timer-container"]}`}>
                {!otpExpired ? 
                    (<>
                        <div className="mt-5 mb-5">
                            <span className={styled["otp-reverse-time"]}>{min}</span>{` `}<span className={styled["otp-reverse-time"]}>:</span>{` `}<span className={styled["otp-reverse-time"]}>{sec}</span>
                        </div>
                    </>) : 
                            (<>
                                <div className="mt-10 mb-5">
                                    <div className="text-center my-0 mx-auto flex justify-center">
                                        <SentimentDissatisfiedIcon className="dark:stroke-pink-500 text-[50px]"/>
                                    </div>
                                    <p className="text-center font-aviny color-pink-light mt-5 mb-5">وقت تموم شد یخورده عجله کن!اگر کد نیومد اون پایین برام پیام بده</p>
                                </div>

                            </>
                    )
                }      
            </div>
        </Fragment>
    )
}


export default React.memo(OTPreverseTimer)

















// const OTPreverseTimer = React.memo(function({otpExpired,setOtpExpired,min,setMin,sec,setSec,setMinutes,setSecond}){
//     // const [min,setMin] = useState(1);
//     // const [sec,setSec] = useState(59);
//     useEffect(() => {
//         const timer = setInterval(() => {
//             if(sec === 0 && min === 0) setOtpExpired(true)
//             if(sec === 0){
//                 // setMin((prevState) => prevState - 1)
//                 setMinutes()
//                 setSec(59)
//             }
//             if(sec > 0){
//                 // setSec((prevState) => prevState -1)
//                 setSecond()
//             }
//         },1000)
//         return () => {
//             clearInterval(timer)
//         }
//     },[min,sec])


//     return (
//         <Fragment>
//             <div className={`${styled["otp-reverse-timer-container"]}`}>
//                 {!otpExpired ? 
//                     (<>
//                         <div className="mt-5 mb-5">
//                             {console.log("Render the child component ---->")}
//                             <span className={styled["otp-reverse-time"]}>{min}</span>{` `}<span className={styled["otp-reverse-time"]}>:</span>{` `}<span className={styled["otp-reverse-time"]}>{sec}</span>
//                         </div>
//                     </>) : 
//                             (<>
//                                 <div className="mt-10 mb-5">
//                                     <div className="text-center my-0 mx-auto flex justify-center">
//                                         <SentimentDissatisfiedIcon className="dark:stroke-pink-500 text-[50px]"/>
//                                     </div>
//                                     <p className="text-center font-aviny color-pink-light mt-5 mb-5">وقت تموم شد یخورده عجله کن!اگر کد نیومد اون پایین برام پیام بده</p>
//                                 </div>

//                             </>
//                     )
//                 }      
//             </div>
//         </Fragment>
//     )
// })


// secondArg => ,(prevProps,nextProps) => {
//     console.log("prevProps.isEnd : ",prevProps.isEnd)
//     console.log("nextProps.isEnd : ",nextProps.isEnd)
//     if(prevProps.isEnd === nextProps.isEnd){
//         return true
//     }
//     return false // props are not equal => update the component
// }


// export default OTPreverseTimer;
