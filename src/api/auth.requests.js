import axios from "axios";
import HttpClientHandler from "@/api/api.config";



class AuthHttpClient extends HttpClientHandler{
    #api;
    #HttpErrorHandler = super.HttpReqResHandler;
    constructor(){
        super();
        this.#api = axios.create({
            baseURL : `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth`,
            // timeout
            // headers
        });
    }
    SendMobileNumber(mobileNumber){
        this.#HttpErrorHandler(this.#api)
        /**
         * response
         * @param {object} data reveived api response data
         * @param {string} message
         * @param {number} status
         * @param {boolean} success
        */
        return new Promise((resolve,reject) => {
            this.#api.post("/login/send-otp/error",{
                mobileNumber
            })
            .then((response) => {
                /**
                 * response.data
                 * @param {MongooseID} _id
                 * @param {string} mobileNumber
                 * @param {boolean} verifiedMobile
                 * @param {Array<string>} favoritesSubjects
                 * @param {object} OTPcode 
                 */
                console.log("returned response form last interface : ",response.data)
                resolve(response.data)
            })
            .catch((error) => {
                /**
                 * error
                 * @param {string} message
                 * @param {number} status
                 * @param {boolean} success
                 * @param {object} errors
                 */
                console.log("error in method : ",error);
                reject(error)
            })
        })
    }   
}


const authHttpClient = new AuthHttpClient();
module.exports = authHttpClient;