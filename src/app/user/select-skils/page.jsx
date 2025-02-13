"use client"
import { Fragment,useState,useEffect } from "react";
import {Stack} from "@mui/material"
import { useRouter } from "next/navigation";
import { TypingEffect } from "@/components/common/LoadingText";
// import the local-components
import StaggeredDropDown from "@/components/common/DropDown";
// import icons
import ComputerIcon from '@mui/icons-material/Computer';
import MovieIcon from '@mui/icons-material/Movie';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Diversity3Icon from '@mui/icons-material/Diversity3';



// ============ initial list ===============
const userSkilsList = [
    {id : 0,title : "برنامه نویس" ,skilValue : "developer",icon : ComputerIcon},
    {id : 1,title : "موشن گرافیست" ,skilValue : "motion_graphics_designer",icon : MovieIcon},
    {id : 2,title : "کارآموز" ,skilValue : "mentee",icon : AccessibilityNewIcon},
    {id : 3,title : "حسابدار" ,skilValue : "accountant",icon : AccountBalanceIcon},
    {id : 4,title : "مدیر منابع انسانی (HR)" ,skilValue : "huamn_resource_manager",icon : Diversity3Icon}
]


export default function UserSelectSkilPage(){
    const [skil,setSkil] = useState("");
    const router = useRouter();
    useEffect(() => {
        if(skil){
            router.push("/user/profile")  
        }
    })

    return (
        <Fragment>
            <div className="page-wrapper">
                <Stack>
                    <div>
                    <TypingEffect
                        text="چکاری میتونی برای بانوجان انجام بدی؟"
                        textColorCls="color-text-light"
                    />
                    </div>
                    <StaggeredDropDown 
                        optionsList={userSkilsList}
                        skil={skil}
                        setSkil={setSkil}
                    />
                </Stack>    
            </div>
        </Fragment>
    )
}