'use client'
import useSpecificSelector from "@/hooks/useSpecificSelector";


export default function UserProfile(){
    const {userInfo : {skil}} = useSpecificSelector("user");
    return (
        <>
            <div className="page-wrapper">
                <div className="color-text-light text-xl">
                    <h3 className="text-center mb-3">دوست خوبم!</h3>
                    <p className="text-center">امیدوارم به زودی شما رو به عنوان
                        <span className="text-2xl color-pink-stroke-500">{`  `}{skil}{`  `}</span>
                        در تیم خودمون داشته باشیم.دوستان ما در پشتیبانی به زودی با شما تماس میگیرن برای دریافت رزومه و مصاحبه
                    </p>
                    <p className="text-center">موفق باشی</p>
                </div>
            </div>
        </>
    )
}

