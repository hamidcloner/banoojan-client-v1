export const getTextMessagesFormAPI = (errObj) => {
    let errorArr = [];
    console.log("entries : ",Object.entries(errObj))
    Object.entries(errObj).forEach(([errorField,errorMsg]) => {
        /**
         * errorMsg:
         * @param {object | string} 
         */
        errorArr.push(typeof errorMsg === "string" ? errorMsg : errorMsg?.message?.fa_message)
    })
    return errorArr;
}