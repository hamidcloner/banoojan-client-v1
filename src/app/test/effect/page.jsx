'use client'
import { useLayoutEffect,useState } from "react";




export default function EffectPage(){
    const [flag,setFlag] = useState(true)
    useLayoutEffect(() => {
        console.log("useLayoutEffect زودتر ")
    })


    return (
        <>
            <div>
                Page 
                <button onClick={() => setFlag(!flag)}>CLICK ME</button>
                {console.log("render is Calliing")}
            </div>
        </>
    )
}