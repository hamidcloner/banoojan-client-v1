import axios from "axios";


console.log("BASE URL : ",process.env.API_BASE_URL)
class UserHttpClient{
    #api;
    superURL;
    constructor(){
        this.#api = axios.create({
            baseURL : `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`
        })
    }
    // test
    Get(){
        return new Promise((resolve,reject) => {
            this.#api.get("/test-client5")
                .then((response) => resolve(response.data))
                .catch((error) => reject(error))
        })
    }
}




const userHttpClient = new UserHttpClient();
export default userHttpClient;