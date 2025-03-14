"use client"
import { Fragment,useEffect } from "react";
// import the local components
import TextInput from "@/components/common/FormWidgets/TextInput";
import ButtonCTA from "@/components/common/FormWidgets/ButtonCTA";
// import the custom-hooks
import useMobileNumberValidation from "@/hooks/useMobileValidation";





export default function MobileNumberHolder(){
    const {mobileNumberInputHandler,isDisable,onSubmitHandler,showServerErrorAsText} = useMobileNumberValidation()
    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}> 
                <div className="form-divider-spacing">
                    <TextInput 
                        handler={mobileNumberInputHandler}
                    />
                </div>
                <div className="form-divider-spacing">
                    {showServerErrorAsText()}
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