import { Paper,Stack } from "@mui/material";
import { TypingEffectByPure } from "@/components/common/LoadingText";
import { AuthMessages } from "@/common/appUImessages";
import OTPinputHolder from "@/components/auth/OTPholder/OTPinputHolder";

export default function OTPlogin(){

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
                    <div className="form-stack-divider-spacing mx-5">
                        <TypingEffectByPure 
                            text={AuthMessages.OTP_Input_Component_Text}
                        />
                    </div>
                    <p className="color-pink-stroke-500 text-center text-xl md:text-2xl">صفحه رو رفرش نکنید!</p>
                    <div className="form-stack-divider-spacing">
                        <OTPinputHolder />
                    </div>
                </Stack>
            </Paper>
        </>
    )
}