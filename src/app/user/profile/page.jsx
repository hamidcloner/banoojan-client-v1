'use client'





import { useSelector} from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import the local component
import {CallUsBadge,GoToChangeSkilBadge} from "@/components/common/Badges";
import {TransitionsModal} from "@/components/common/Modals";
// import the custom hook
import {useHttpPostMethodByHeaders} from "@/hooks/useClientHttpMethods";
import useModalToggled from "@/hooks/useModalToggled";
import useSpecificSelector from "@/hooks/useSpecificSelector";
// import actions 
import {getUserFieldsInfo} from "@/features/User/actions";
import useCheckUserAuth from "@/hooks/useCheckUserAuth";


import PageParentProtectedRoute from "@/common/createProtectedRoute";




// const UserProfile = () => {


//     // ============ Protected ===================
//     useCheckUserAuth()
//     const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
//     // ============================================

//     const router = useRouter();
//     const skil = useSelector(state => state.user.userInfo.skil);
//     const {HttpParamsMethodAddHeaders} = useHttpPostMethodByHeaders(getUserFieldsInfo)  
//     useEffect(() => {
//         if(!isAuthenticated){
//             return router.push("/auth/login")
//         }
//         HttpParamsMethodAddHeaders("skil")
//     })
//     const gotToSelectSkilPageBadgehandler = () => {
//         console.log("click me!")
//         router.push("/user/select-skils")
//     }
//     const {open,handleOpen,handleClose,modalFormData,formDataHandler} = useModalToggled({feedbackComment : ""});

//     return (
//         <>
//             <div className="page-wrapper relative">
//                 <div className="color-text-light text-xl">
//                     <h3 className="text-center mb-3">دوست خوبم!</h3>
//                     <p className="text-center">امیدوارم به زودی شما رو به عنوان
//                         <span className="text-2xl color-pink-stroke-500">{`  `}{skil}{`  `}</span>
//                         در تیم خودمون داشته باشیم.دوستان ما در پشتیبانی به زودی با شما تماس میگیرن برای دریافت رزومه و مصاحبه
//                     </p>
//                     <p className="text-center">موفق باشی</p>
//                 </div>
//                 <div className="fixed bottom-10 right-10">
//                     <CallUsBadge 
//                         handleOpen={handleOpen}
//                     />
//                 </div>
//                 <div className="fixed bottom-10 left-5">
//                     <GoToChangeSkilBadge 
//                         handleClick={gotToSelectSkilPageBadgehandler}
//                     />
//                 </div>
//                 {/* == send comment modal == */}
//                 <TransitionsModal 
//                     open={open} 
//                     handleClose={handleClose}
//                     modalFormData={modalFormData}
//                     formDataHandler={formDataHandler}
//                 />
//             </div>
//         </>
//     )
// }





// export default UserProfile;








const UserProfilePageContent = () => {


    const router = useRouter();
    const skil = useSelector(state => state.user.userInfo.skil);
    const {HttpParamsMethodAddHeaders} = useHttpPostMethodByHeaders(getUserFieldsInfo)  
    useEffect(() => {
        // if(!isAuthenticated){
        //     return router.push("/auth/login")
        // }
        HttpParamsMethodAddHeaders("skil")
    })
    const gotToSelectSkilPageBadgehandler = () => {
        router.push("/user/select-skils")
    }
    const {open,handleOpen,handleClose,modalFormData,formDataHandler} = useModalToggled({feedbackComment : ""});

    return (
        <>
            {console.log("===== user/profile => رندر شدن children ======")}
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
        </>
    )
}


export default function UserProfile(){
    return (
        <PageParentProtectedRoute>
            <UserProfilePageContent />
        </PageParentProtectedRoute>
    )

}





