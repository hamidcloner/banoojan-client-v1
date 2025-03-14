'use client'

import { useSelector} from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import the local component
import {CallUsBadge,GoToChangeSkilBadge} from "@/components/common/Badges";
import {TransitionsModal} from "@/components/common/Modals";
import { HashLoading } from "@/components/loadings";
// import the custom hook
import {useHttpPostMethodByHeaders} from "@/hooks/useClientHttpMethods";
import useModalToggled from "@/hooks/useModalToggled";
// import actions 
import {getUserFieldsInfo} from "@/features/User/actions";


import PageParentProtectedRoute from "@/common/createProtectedRoute";
import Link from "next/link";



const UserProfilePageContent = () => {


    const router = useRouter();
    // === users slice states
    const loading = useSelector(state => state.user.loading);
    const skil = useSelector(state => state.user.userInfo.skil);
    // ======================
    const {HttpParamsMethodAddHeaders,authToken} = useHttpPostMethodByHeaders(getUserFieldsInfo)  
    useEffect(() => {
        HttpParamsMethodAddHeaders("skil")
    },[authToken])
    const gotToSelectSkilPageBadgehandler = () => {
        router.push("/user/select-skils")
    }
    const {open,handleOpen,handleClose,modalFormData,formDataHandler} = useModalToggled({feedbackComment : ""});

    const generateRenderUI = () => {
        if(loading && !skil){
            return (
                <div className="page-wrapper relative">
                    <HashLoading color="#3D2B8E" load={loading}/>
                </div>
            )
        }
        if(!loading && !skil){
            return (
                <div className="page-wrapper relative">
                <div className="color-text-light text-xl">
                    <h3 className="text-center mb-3">دوست خوبم!</h3>
                    <p className="text-center">
                        دوست عزیزم شما هنوز مهارتی رو انتخاب نکردید
                    </p>
                    <p className="text-center">
                        اگر تمایل داری با تیم ما همکاری کنی،
                        <Link className="color-pink-stroke-500" href={`/user/select-skils`}>اینجا رو کلیک کن</Link>
                    </p>
                    <p className="text-center">موفق باشی</p>
                </div>
                <div className="fixed bottom-10 right-10">
                    <CallUsBadge 
                        handleOpen={handleOpen}
                    />
                </div>
                <div className="fixed bottom-10 left-5">
                    <GoToChangeSkilBadge 
                        handleClick={gotToSelectSkilPageBadgehandler}
                    />
                </div>
                {/* == send comment modal == */}
                <TransitionsModal 
                    open={open} 
                    handleClose={handleClose}
                    modalFormData={modalFormData}
                    formDataHandler={formDataHandler}
                />
            </div>

            )

        }
        if(!loading && skil){
            return (
                <div className="page-wrapper relative">
                <div className="color-text-light text-xl">
                    <h3 className="text-center mb-3">دوست خوبم!</h3>
                    <p className="text-center">امیدوارم به زودی شما رو به عنوان
                        <span className="text-2xl color-pink-stroke-500">{`  `}{skil}{`  `}</span>
                        در تیم خودمون داشته باشیم.دوستان ما در پشتیبانی به زودی با شما تماس میگیرن برای دریافت رزومه و مصاحبه
                    </p>
                    <p className="text-center">موفق باشی</p>
                </div>
                <div className="fixed bottom-10 right-10">
                    <CallUsBadge 
                        handleOpen={handleOpen}
                    />
                </div>
                <div className="fixed bottom-10 left-5">
                    <GoToChangeSkilBadge 
                        handleClick={gotToSelectSkilPageBadgehandler}
                    />
                </div>
                {/* == send comment modal == */}
                <TransitionsModal 
                    open={open} 
                    handleClose={handleClose}
                    modalFormData={modalFormData}
                    formDataHandler={formDataHandler}
                />
            </div>
            )
            
        }
       
    }
    return generateRenderUI()
}


export default function UserProfile(){
    return (
        <PageParentProtectedRoute>
            <UserProfilePageContent />
        </PageParentProtectedRoute>
    )

}





