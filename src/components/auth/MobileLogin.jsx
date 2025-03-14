import { Fragment } from "react";
import { Paper,Stack } from "@mui/material";
import {AuthMessages} from "@/common/appUImessages";

// import the local components
import {TypingEffectByPure} from "@/components/common/LoadingText";
import MobileNumberHolder from "@/components/auth/MobileHolder/MobileNumberHolder";







export default function MobileLogin(){
    return (
        <Fragment>
            <Paper
                elevation={0}
                variant="elevation"
                square={false}
                sx={{
                    bgcolor : "transparent",
                    py : "30px !important",
                }}
            >
                <Stack>
                    <div className="form-stack-divider-spacing mx-5">
                        <TypingEffectByPure 
                            text="برای اضافه شدن به تیم ما،شمارت رو وارد کن" 
                        />
                    </div>
                    <p className="color-pink-stroke-500 text-center text-xl md:text-2xl">صفحه رو رفرش نکنید!</p>
                    <div className="form-stack-divider-spacing">
                        <MobileNumberHolder />
                    </div>     
                </Stack>
            </Paper>
        </Fragment>
    )
}