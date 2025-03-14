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
    const loadingUntilChekAuth = useSelector(state => state.auth.loadingUntilChekAuth);
    const verifiedMobile = useSelector(state => state.auth.verifiedMobile)
    // ==========================================================================
    const stepOfAuthenticate = useSelector(state => state.auth.stepOfAuthenticate);


    const mobileNumber = useSelector(state => state.auth.user.mobileNumber)


    useEffect(() => {
        // The user could not be authenticated! You stay on this page

        // ============ without referesh ==============
        if(mobileNumber && isAuthenticated && stepOfAuthenticate === "completed"){
            router.push("/user/select-skils")
        }
        // User authenticated => this page is protected and You should go to the profile page 
        if(mobileNumber && isAuthenticated && stepOfAuthenticate === "mobile"){
            router.push("/user/profile")
        }
        if(!mobileNumber){
            router.push("/auth/login")
        }
    },[isAuthenticated,stepOfAuthenticate,pathName,loadingUntilChekAuth])
   
    if(loadingUntilChekAuth){
        return (
            <div className="page-wrapper">
                <HashLoading color="#3D2B8E" load={load} />
            </div>
        )
    }else if(mobileNumber){
        return children
    }
   
}