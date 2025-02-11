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
        return new Promise((resolve,reject) => {
            this.#api.post("/login/send-otp",{
                mobileNumber
            })
            .then((response) => resolve(response))
            .catch((error) => reject(error))
        })
    }   
}


const authHttpClient = new AuthHttpClient();
module.exports = authHttpClient;