"use client"

import { Fragment,useState,useEffect } from "react";
import PageParentProtectedRoute from "@/common/createProtectedRoute";
import {Stack} from "@mui/material"
import { useRouter } from "next/navigation";
import { TypingEffectByPure } from "@/components/common/LoadingText";
import { useDispatch } from "react-redux";
// import the local-components
import StaggeredDropDown from "@/components/common/DropDown";
// import icons
import ComputerIcon from '@mui/icons-material/Computer';
import MovieIcon from '@mui/icons-material/Movie';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Diversity3Icon from '@mui/icons-material/Diversity3';
// import the actions
import {sendUserSelectedSkils} from "@/features/User/actions"
import {setUserSelectedSkilTitle} from "@/features/User/userSlice";
// import the custom-hooks
import {useHttpPostMethodByHeaders} from "@/hooks/useClientHttpMethods";


// ============ initial list ===============
const userSkilsList = [
    {id : 0,title : "برنامه نویس" ,skilValue : "developer",icon : ComputerIcon},
    {id : 1,title : "موشن گرافیست" ,skilValue : "motion_graphics_designer",icon : MovieIcon},
    {id : 2,title : "کارآموز" ,skilValue : "mentee",icon : AccessibilityNewIcon},
    {id : 3,title : "حسابدار" ,skilValue : "accountant",icon : AccountBalanceIcon},
    {id : 4,title : "مدیر منابع انسانی (HR)" ,skilValue : "huamn_resource_manager",icon : Diversity3Icon}
]


export function UserSelectSkilPageContent(){

    const dispatch = useDispatch()
    const [skil,setSkil] = useState("");
    const [skilTitleToShow,setSkilTitleToShow] = useState("")
    const {HttpPostMethodAddHeaders} = useHttpPostMethodByHeaders(sendUserSelectedSkils);
    const router = useRouter();
    useEffect(() => {
        if(skil){
            dispatch(setUserSelectedSkilTitle({skilTitleToShow}))
            HttpPostMethodAddHeaders({skil})
            router.push("/user/profile")   
        }
    },[skil])
    return (
        <Fragment>
            <div className="page-wrapper">
                <Stack>
                    <div className="form-stack-divider-spacing mx-5">
                        <TypingEffectByPure 
                            text="چکاری میتونی برای بانوجان انجام بدی؟"
                        />
                    </div>
                    <StaggeredDropDown 
                        optionsList={userSkilsList}
                        skil={skil}
                        setSkil={setSkil}
                        setSkilTitleToShow={setSkilTitleToShow}
                    />
                </Stack>    
            </div>
        </Fragment>
    )
}



export default function UserSelectSkilPage(){
    return (
        <PageParentProtectedRoute>
            <UserSelectSkilPageContent />
        </PageParentProtectedRoute>
    )
}

