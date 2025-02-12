"use client"
import { Fragment,useEffect } from "react";
// import the local components
import TextInput from "@/components/common/FormWidgets/TextInput";
import ButtonCTA from "@/components/common/FormWidgets/ButtonCTA";
// import the custom-hooks
import useMobileNumberValidation from "@/hooks/useMobileValidation";
import useSpecificSelector from "@/hooks/useSpecificSelector";





export default function MobileNumberHolder(){
    const authState = useSpecificSelector("auth");
    const {mobileNumber,setMobileNumber,mobileNumberInputHandler,isDisable,onSubmitHandler,error} = useMobileNumberValidation()
    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}> 
                <div className="form-divider-spacing">
                    {console.log("authState : ",authState)}
                    <TextInput 
                        handler={mobileNumberInputHandler}
                    />
                </div>
                <div className="form-divider-spacing text-center">
                    <ButtonCTA
                        btnTextDisable="اول شماره رو به درستی وارد کن،بعد بزن رو من!"
                        btnTextEnable="ارسال کد یکبار مصرف"
                        btnDisable={isDisable}
                        btnType="submit" 
                    />
                </div>
            </form>
        </Fragment>

    )
    
}