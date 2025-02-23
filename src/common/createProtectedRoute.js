import useCheckUserAuth from "@/hooks/useCheckUserAuth";
import { useState,useEffect } from "react";
import { useRouter,usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import {HashLoading} from "@/components/loadings";


export default function PageParentProtectedRoute({children}){
    const pathName = usePathname()
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
            router.push(pathName)    
        }
    },[isAuthenticated])
    if (isAuthenticated){
        return children
    }else{
        return (
            <div className="page-wrapper">
                <HashLoading color="#3D2B8E" load={load}/>
            </div>
        )
    }
         
    

}















