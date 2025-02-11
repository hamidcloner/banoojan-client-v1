import api from "@/api/api.config";


const ServerErrorHandler = () => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===")
    api.interceptors.request.use(function(response){
        console.log("request interceptor : response")
    },function(error){
        console.log("request interceptor : error")
    })
    api.interceptors.response.use(function(response){
        return response;
    },function(error){
        console.log("=======================================================================================")
        console.log("*****************************************************Interceptor Error : ",error)
        return Promise.reject(error)

    })
    // return;
    return (
        <></>
    )
}


export default ServerErrorHandler;