import axios from "axios";



class AuthHttpClient{
    #api;
    constructor(){
        this.#api = axios.create({
            baseURL : `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth`,
            // timeout
            // headers
        });
    }
    SendMobileNumber(mobileNumber){
        /**
         * response
         * @param {object} data exactly api response
         * @param {object} config axios
         * @param {object} headers axios
         * @param {object} request axios
         * @param {number} status axios
         * @param {string} statusText axios
         * 
         * response.data
         * @param {object} data reveived api response data
         * @param {string} message
         * @param {number} status
         * @param {boolean} success
        */
        return new Promise((resolve,reject) => {
            this.#api.post("/login/send-otp",{
                mobileNumber
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => reject(error))
        })
    }   
}


const authHttpClient = new AuthHttpClient();
module.exports = authHttpClient;