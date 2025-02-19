export const AuthTypes = Object.freeze({
    name : "auth",
    SEND_USER_MOBILENUMBER : "auth/setUserMobileNumber",
    SEND_USER_OTP : "auth/sendUserOTP",
    SEND_AUTH_TOKEN : "auth/sendStoragedToken"
})

export const UserTypes = Object.freeze({
    name : "user",
    SEND_USER_SKILS : "user/sendUserSkil",
    SEND_USER_FEEDBACK_COMMENT : "user/sendUserFeedback",
    GET_USER_SPECIFIC_FIELDS : "user/getUserSpecificFields"
})