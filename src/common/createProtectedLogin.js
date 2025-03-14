import useCheckUserAuth from "@/hooks/useCheckUserAuth";
import {useState,useEffect} from "react";
import { useRouter,usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { HashLoading } from "@/components/loadings";





export default function PageParentLoginPage({children}){
    const pathName = usePathname()
    const router = useRouter();
    const [load,setLoad] = useState(true);
    useCheckUserAuth();
    // required states for check user is authenticated (go to user/profile) OR not (stay on this page)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const checkAuthError = useSelector(state => state.auth.checkAuthError);
    const loadingUntilChekAuth = useSelector(state => state.auth.loadingUntilChekAuth);
    // ==========================================================================
    const stepOfAuthenticate = useSelector(state => state.auth.stepOfAuthenticate);


    useEffect(() => {
        // User authenticated => this page is protected and You should go to the profile page 
        if(isAuthenticated && stepOfAuthenticate === "mobile"){
            router.push("/user/profile")
        }
    },[isAuthenticated,stepOfAuthenticate,pathName,loadingUntilChekAuth])
   
    if(loadingUntilChekAuth){
        return (
            <div className="page-wrapper">
                <HashLoading color="#3D2B8E" load={load} />
            </div>
        )
    // loadingUntilCheckAuth = false && checkAuthError = true => Dont Auth! => got to login(children)
    }else if((!loadingUntilChekAuth && checkAuthError) || !isAuthenticated){
        return children
    }
   
}

