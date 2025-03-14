'use client'
import OTPlogin from "@/components/auth/OTPlogin";
import PageParentRegisterPageProtected from "@/common/createRegisterProtectedRoute";





function OTPpageContent(){
    return (
        <div className="page-wrapper">
            <OTPlogin />
        </div>
    )
}




export default function OTPpage(){
    return (
        <PageParentRegisterPageProtected>
            <OTPpageContent />
        </PageParentRegisterPageProtected>
    )
}