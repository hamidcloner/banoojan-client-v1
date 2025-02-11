import axios from "axios";

const api = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_BASE_URL,
})

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
            return response.data;
        },function(error){
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
            return Promise.reject(error)
        })
    }
}



export default HttpClientHandler;