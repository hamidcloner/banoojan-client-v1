import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";



export const useHttpPostMethodByHeaders = (httpActionMethod) => {
    const dispatch = useDispatch();
    const [authToken,setAuhtToken] = useState()
   
    useEffect(() => {
        setAuhtToken(localStorage.getItem("banooJanAuthToken"))
    })
    /**
     * این آبجکت بودن به خاطر محدودیت ورودی createAsyncThunk است
     * @param {object} bodyReqContent must be object even just contain one field => چون قراره جاهای مختلفی از این هوک استفاده کنیم،و ممکن هست بادی درخواست جاهای دیگه بیشتر از یک فیلد باشد
     */
    const HttpPostMethodAddHeaders = (bodyReqContent) => {
        console.log("auhtToken : ",authToken)
        dispatch(httpActionMethod({bodyReqContent,authToken}))
    }

    return {
        HttpPostMethodAddHeaders
    }


}