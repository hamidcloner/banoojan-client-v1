import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";



export const useHttpPostMethodByHeaders = (httpActionMethod) => {
    const dispatch = useDispatch();
    const [authToken,setAuhtToken] = useState()

    const [loadUntilMountStorage,setLoadUntilMountStorage] = useState(true)
   

    useEffect(() => {
        const authToken = localStorage.getItem("banooJanAuthToken");
        if(authToken){
            setAuhtToken(authToken)
            setLoadUntilMountStorage(false)
        }
    },[loadUntilMountStorage])




    /**
     * این آبجکت بودن به خاطر محدودیت ورودی createAsyncThunk است
     * @param {object} bodyReqContent must be object even just contain one field => چون قراره جاهای مختلفی از این هوک استفاده کنیم،و ممکن هست بادی درخواست جاهای دیگه بیشتر از یک فیلد باشد
     */
    const HttpPostMethodAddHeaders = (bodyReqContent) => {
        dispatch(httpActionMethod({bodyReqContent,authToken}))
    }
    const HttpParamsMethodAddHeaders = (params) => {
        /**
         * @param {string} params =useCase=> "fields1-fields2-.." separate by '-'
         */
        dispatch(httpActionMethod({params,authToken}))
      
    }

    return {
        HttpPostMethodAddHeaders,
        HttpParamsMethodAddHeaders,
        authToken
    }


}