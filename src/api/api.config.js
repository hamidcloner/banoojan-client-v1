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
        // handler the request http
        apiServiceInstace.interceptors.request.use(function(config){
            console.log("config is : ",config);
            return config
        },function(error){
            return Promise.reject(error)
        })
        apiServiceInstace.interceptors.response.use(function(response){
            console.log("response is : ",response)
            return response;
        },function(error){
            console.log("error is : ",error);
            return Promise.reject(error)
        })
    }
}



export default HttpClientHandler;