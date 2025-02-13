
import {HashLoader,FadeLoader,ClockLoader,ScaleLoader,SyncLoader} from "react-spinners"

/**
 * 
 * @param {object} cssOverride 
 * @param {boolean} load 
 * @param {string} color
 * @returns 
 */
  
export function HashLoading({cssOverride,color,load}){
    return (
        <>
            <HashLoader
                color={color}
                height={80}
                loading={load}
                width={60}
                cssOverride={cssOverride}
            />
            
        </>
    )
}

export function SunFadeLoading({cssOverride,load,color}){
    return (
        <>
            <FadeLoader 
                color={color}
                height={80}
                loading={load}
                width={60}
                cssOverride={cssOverride}
            />
        </>
    )
}

export function ClockLoading({cssOverride,load,color}){
    return (
        <>
            <ClockLoader 
                color={color}
                height={80}
                loading={load}
                width={60}
                cssOverride={cssOverride}
            />
        </>
    )

}
export function ScaleLoading({cssOverride,load,color}){
    return (
        <>
            <ScaleLoader 
                color={color}
                height={80}
                loading={load}
                width={60}
                cssOverride={cssOverride}
            />
        </>
    )
}
export function SyncLoading({cssOverride,load,color}){
    return (
        <>
            <SyncLoader 
                color={color}
                height={80}
                loading={load}
                width={60}
                cssOverride={cssOverride}
                
            />
        </>
    )
}



