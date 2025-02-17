'use client'
import useSpecificSelector from "@/hooks/useSpecificSelector";
// import the local component
import {CallUsBadge} from "@/components/common/Badges";
import {TransitionsModal} from "@/components/common/Modals";
// import the custom hook
import useModalToggled from "@/hooks/useModalToggled";



export default function UserProfile(){

    const {userInfo : {skil}} = useSpecificSelector("user");
    const {open,handleOpen,handleClose} = useModalToggled();

    return (
        <>
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
                {/* == send comment modal == */}
                <TransitionsModal 
                    open={open} 
                    handleClose={handleClose}
                />
            </div>
        </>
    )
}

