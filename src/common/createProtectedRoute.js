import useCheckUserAuth from "@/hooks/useCheckUserAuth";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {HashLoading} from "@/components/loadings";


export default function PageParentProtectedRoute({children}){
    const router = useRouter()
    const [load,setLoad] = useState(true)
    useCheckUserAuth();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    useEffect(() => {
        if(!isAuthenticated){
            router.push("/auth/login")
        }
        if(isAuthenticated){
            setLoad(false)
        }
    },[isAuthenticated])
    if (isAuthenticated){
        return children
    }else{
        return (
            <HashLoading color="#3D2B8E" load={load}/>
        )
    }
         
    

}















