import { Paper,Stack } from "@mui/material";
import { TypingEffect } from "@/components/common/LoadingText";
import { AuthMessages } from "@/common/appUImessages";
import OTPinputHolder from "@/components/auth/OTPholder/OTPinputHolder";
import OTPreverseTimer from "@/components/auth/OTPholder/OTPreverseTimer";
import { useEffect } from "react";

export default function OTPlogin(){
    useEffect(() => {
        console.log("دوتا بالاتر mount شد،OTPlogin")
        return () => {
            console.log("دوتا بالاتر UNMOUNT شد،OTPlogin")
        }
    },[])
    return (
        <>
            <Paper
                elevation={0}
                variant="outlined"
                square={false}
                sx={{
                    bgcolor : "transparent",
                    py : "30px !important"
                }}
            >
                <Stack>
                    <div className="form-stack-divider-spacing">
                        <TypingEffect
                            text={AuthMessages.OTP_Input_Component_Text} 
                            textColorCls="color-bg-light"
                            durationTime={0}
                        />

                    </div>
                    <div className="form-stack-divider-spacing">
                        <OTPinputHolder />
                    </div>
                </Stack>
            </Paper>
        </>
    )
}