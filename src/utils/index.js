export const getTextMessagesFormAPI = (errObj) => {
    console.log("errorOBJ : ",errObj)
    let errorArr = [];
    Object.entries(errObj).forEach(([errorField,errorMsg]) => {
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