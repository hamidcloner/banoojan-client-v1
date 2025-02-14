import axios from "axios";
import {GloballyMessage} from "@/common/appUImessages"


class HttpClientHandler{
    constructor(){
        if (this.constructor == HttpClientHandler) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    HttpReqResHandler(apiServiceInstace){
        /**
         * config:
         * @param {Array<string>} adapter
         * @param {string} baseURL
         * @param {object} data : bodyRequest
         * @param {object}  env
         * @param {object} headers
         * ......
         * @param {string} method 
         * @param {number} timeout
         * @param {string} url 
         */
        apiServiceInstace.interceptors.request.use(function(config){
            return config
        },function(error){
            return Promise.reject(error)
        })

        // ====== handle the Response ======= 
        apiServiceInstace.interceptors.response.use(function(response){
        /**
         * response:
         * @param {object} data exactly api response
         * @param {object} config axios
         * @param {object} headers axios
         * @param {object} request axios
         * @param {number} status axios
         * @param {string} statusText axios
         */
            console.log("response ============ ",response)
            return response.data;
        },function(error){
            let rejectedError;
            console.log("error in last interface : ",error)
            /**
             * @param {string} code axios
             * @param {object} config axios
             * @param {string} message axios
             * @param {string} name axios
             * @param {object} request axios | XMLHttpRequest
             * @param {number} status axios
             * @param {object}  response axios => 
             * {data : axactly api response,config : ,headers : ,request : ,status : ,statusText : }
             * response.data => 
             *      message : string
             *      status : number
             *      success : boolean
             *      errors : object
             */
            // Handle the network Error (Network and internet)
            if(error.message === "Network Error" || error.code === "ERR_NETWORK"){
                rejectedError = {errors : {NetWorkError : {message : GloballyMessage?.NetworkError}}}
                return Promise.reject(rejectedError)
            }else if(error.status >= 500){
                rejectedError = {errors : {InternalServerError : {message : GloballyMessage?.InternalServerError}}}
                return Promise.reject(rejectedError);
            }
            else{
                rejectedError = error.response.data;
                return Promise.reject(rejectedError)
            }
         
        })
    }

}



export default HttpClientHandler;