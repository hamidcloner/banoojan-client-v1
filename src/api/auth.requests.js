import axios from "axios";
import HttpClientHandler from "@/api/api.config";



class AuthHttpClient extends HttpClientHandler{
    #api;
    #HttpErrorHandler = super.HttpReqResHandler;
    constructor(){
        super();
        this.#api = axios.create({
            baseURL : `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth45`,
            // timeout
            // headers
        });
    }
    // #ApiHttpResReqErrorHandler(){
    //     this.#api.interceptors.response.use()
    // }
    SendMobileNumber(mobileNumber){
        this.#HttpErrorHandler(this.#api)
        // this.#api.interceptors.request.use(function(config){
        //     console.log("config is : ",config)
        //     return config
        // },function(error){
        //     return Promise.reject(error)
        // })
        // this.#api.interceptors.response.use(function(response){
        //     console.log("response is : ",response)
        // },function(error){
        //     console.log("error is : ",error);
        //     return Promise.reject(error)
        // })
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