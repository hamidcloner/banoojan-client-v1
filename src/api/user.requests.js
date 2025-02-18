'use client'
import axios from "axios";
import HttpClientHandler from "@/api/api.config";



class UserHttpClient extends HttpClientHandler{
    #api;
    #HttpErrorHandler = super.HttpReqResHandler;
    constructor(){
        super();
        this.#api = axios.create({
            baseURL : `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
            // timeout
            // headers : {
            //     Authorization : `Bearer ${clientToken}`
            // }
        })
        this.#HttpErrorHandler(this.#api)
    }

    AddUserSkil(skil,clientAuthToken){
        // skils argument must be object finally Destructuring it
        // this.#HttpErrorHandler(this.#api);
        /**
         * response
         * @param {object} data reveived api response data
         * @param {string} message
         * @param {number} status
         * @param {boolean} success
        */
        return new Promise((resolve,reject) => {
            // this.#api.post("/add-new-skils",{
            //     skils
                
            // })
            this.#api.post("/add-new-skils",{...skil},{
                // signal : controller.signal,
                headers : {
                    Authorization : `Bearer ${clientAuthToken}`
                }
            })
            .then((response) => {
                /**
                 * response:
                 * @param {number} status
                 * @param {boolean} success
                 * @param {object} message
                 * @param {object} data => {modifiedUser : {skil,mobileNumber,....}}
                 */
                console.log("user response in http method : ",response)
                resolve(response.data.modifiedUser)
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
    AddUserFeedbackComment(feedbackComment,clientAuthToken){
        // feedbackComment argument must be an object finally Destructuring it
        // this.#HttpErrorHandler(this.#api)
              /**
         * response
         * @param {object} data reveived api response data
         * @param {string} message
         * @param {number} status
         * @param {boolean} success
        */
       return new Promise((resolve,reject) => {
        this.#api.post("/add-user-feedback-comment",{...feedbackComment},{
            // signal : controller.signal,
            headers : {
                Authorization : `Bearer ${clientAuthToken}`
            }
        })
    
        .then((response) => {
            /**
             * response:
             * @param {number} status
             * @param {boolean} success
             * @param {object} message
             * @param {object} data => {modifiedUser : {skil,mobileNumber,....}}
             */
            console.log("user response in http method : ",response)
            resolve(response.data.modifiedUser)
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