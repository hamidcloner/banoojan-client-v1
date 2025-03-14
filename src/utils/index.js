export const getTextMessagesFormAPI = (errObj) => {
    let errorArr = [];
    Object.entries(errObj).forEach(([errorField,errorMsg]) => {
        // special Error => NetWorkError && InternalServerError
        /**
         * errorMsg:
         * @param {object | string} 
         */
        // errorArr.push(typeof errorMsg === "string" ? errorMsg : errorMsg?.message?.fa_message)
        if(typeof errorMsg === "string"){
            errorArr.push(errorMsg)
        }else if(errorMsg?.message?.fa_message){
            errorArr.push(errorMsg?.message?.fa_message)
        }else{
            errorArr.push(errorMsg?.message)
        }

    })
    return errorArr;
}



export const transferSkilLangToFa = (receivedSkil) => {
    const validSkilValues = ["developer","motion_graphics_designer","mentee","accountant","huamn_resource_manager"];
    const transferToFaArray = [["developer","برنامه نویس"],["motion_graphics_designer","موشن گرافیست"],["mentee","کارآموز"],["accountant","حسابدار"],["huamn_resource_manager","مدیر منابع انسانی (HR)"]]
    const faSkil = transferToFaArray.find((skil) => skil[0] === receivedSkil)
    return faSkil[1]
}