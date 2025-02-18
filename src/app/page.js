"use client"
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import useCheckUserAuth from "@/hooks/useCheckUserAuth";
import HomePagePreloader from "@/components/Preloader/homePagePreloader";
import { useSelector } from "react-redux";



export default function Home() {
  useCheckUserAuth()
  const [isLoading,setIsLoading] = useState(true);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const router = useRouter();
 
  useEffect(() => {
    if(!isLoading && isAuthenticated){
      router.push("/user/profile")
    }
    if(!isLoading && !isAuthenticated){
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
