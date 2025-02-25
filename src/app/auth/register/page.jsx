'use client'
import OTPlogin from "@/components/auth/OTPlogin";
import PageParentLoginPageProtected from "@/common/createLoginProtectedRoute";





function OTPpageContent(){
    return (
        <div className="page-wrapper">
            <OTPlogin />
        </div>
    )
}




export default function OTPpage(){
    return (
        <PageParentLoginPageProtected>
            <OTPpageContent />
        </PageParentLoginPageProtected>
    )
}