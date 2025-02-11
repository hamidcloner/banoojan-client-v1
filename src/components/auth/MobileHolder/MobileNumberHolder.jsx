"use client"
import { Fragment,useEffect } from "react";
// import the local components
import TextInput from "@/components/common/FormWidgets/TextInput";
import ButtonCTA from "@/components/common/FormWidgets/ButtonCTA";
// import the custom-hooks
import useMobileNumberValidation from "@/hooks/useMobileValidation";
import { useSelector,useDispatch } from "react-redux";
// ======== actions ======
import {getUserInfo} from "@/features/User/actions";
import {sendUserMobileNumber} from "@/features/auth/actions/"





export default function MobileNumberHolder(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(sendUserMobileNumber("09357324849"))
    },[])
    const selector = useSelector(state => state)
    const {mobileNumber,setMobileNumber,mobileNumberInputHandler,isDisable,onSubmitHandler} = useMobileNumberValidation()
    return (
        <Fragment>
            {console.log("selector in mobileNumberHolder : ",selector)}
            <form onSubmit={onSubmitHandler}> 
                <div className="form-divider-spacing">
                    <TextInput 
                        handler={mobileNumberInputHandler}
                    />
                </div>
                <div className="form-divider-spacing text-center">
                    <ButtonCTA
                        btnTextDisable="اول شماره رو وارد کن بعدبزن رو من!"
                        btnTextEnable="ارسال کد یکبار مصرف"
                        btnDisable={isDisable}
                        btnType="submit" 
                    />
                </div>
            </form>
        </Fragment>

    )
    
}