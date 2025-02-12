export const getTextMessagesFormAPI = (errObj) => {
    let errorArr = [];
    Object.entries(errObj).forEach(([errorField,errorMsg]) => {
        /**
         * errorMsg:
         * @param {object | string} 
         */
        errorArr.push(typeof errorMsg === "string" ? errorMsg : errorMsg?.message?.fa_message)
    })
    return errorArr;
}