import axios from "axios";
import HttpClientHandler from "@api/api.config";


class UserHttpClient extends HttpClientHandler{
    #api;
    #HttpErrorHandler = super.HttpClientHandler;
    constructor(){
        super();
        this.#api = axios.create({
            baseURL : `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
            // timeout
            headers : {
                Authorization : `Bearer ${localStorage.getItem("banooJanAuthToken")}`
            }
        })
    }
    AddUserSkil(skils){
        this.#HttpErrorHandler(this.#api);
        /**
         * response
         * @param {object} data reveived api response data
         * @param {string} message
         * @param {number} status
         * @param {boolean} success
        */
        return new Promise((resolve,reject) => {
            this.#api.post("/add-new-skils",{
                skils
            })
            .then((response) => {
                console.log("user response in http method : ",response)
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
                reject(error)

            })
        })
    }

}




const userHttpClient = new UserHttpClient();
export default userHttpClient;