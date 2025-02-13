"use client"
import {HashLoading,SunFadeLoading,ClockLoading,ScaleLoading,SyncLoading} from "@/components/loadings";
import { useState } from "react";



export default function LoadingPage(){
    const [load,setLoad] = useState(true)
    return (
        <>
            <HashLoading color="#3D2B8E" load/>
            <SunFadeLoading color="#3D2B8E" load/>
            {/* <ClockLoading /> */}
            {/* <ScaleLoading /> */}
            {/* <SyncLoading /> */}
        </>
    )
}