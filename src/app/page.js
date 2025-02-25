"use client"
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import useCheckUserAuth from "@/hooks/useCheckUserAuth";
import HomePagePreloader from "@/components/Preloader/homePagePreloader";
import { useSelector } from "react-redux";




import OTPreverseTimer from "@/components/auth/OTPholder/OTPreverseTimer";



export default function Home() {
  useCheckUserAuth()
  const [isLoading,setIsLoading] = useState(true); // create state for show preLoading

  // required states for check user is authenticated (go to user/profile) OR not (go to /auth/login to register)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const checkAuthError = useSelector(state => state.auth.checkAuthError);
  const loadingUntilChekAuth = useSelector(state => state.auth.loadingUntilChekAuth);


  const router = useRouter();
 
  useEffect(() => {

    if(!isLoading && !checkAuthError && !loadingUntilChekAuth && isAuthenticated){
      // User authenticated
      router.push("/user/profile")
    }if(!isLoading && checkAuthError && !loadingUntilChekAuth && !isAuthenticated){
      // The user could not be authenticated!
      router.push("/auth/login")
    }
    const createLoadingLogic = () => {
      setTimeout(() => {
        setIsLoading(false);
      },2800)
    }
    createLoadingLogic();
  })
  return (
    <>
      <HomePagePreloader />
    </>
  )


}
