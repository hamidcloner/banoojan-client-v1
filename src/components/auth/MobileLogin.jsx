import { Fragment } from "react";
import { Paper,Stack } from "@mui/material";
import {AuthMessages} from "@/common/appUImessages";

// import the local components
import {TypingEffect} from "@/components/common/LoadingText";
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
                        <TypingEffect 
                            text={AuthMessages.Moblie_Input_Component_Text}
                            textColorCls="color-bg-light"
                            durationTime={0}
                            className="mb-10"
                        />
                    </div>
                    <div className="form-stack-divider-spacing">
                        <MobileNumberHolder />
                    </div>  
                </Stack>
            </Paper>
        </Fragment>
    )
}