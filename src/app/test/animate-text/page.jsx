import { Fragment } from "react";
import {TypingEffect,TextFadeWithHeader} from "@/components/LoadingText";
import Image from "next/image";
import brandLogo from "@/public/logo/Line_Art_Woman_Flower.svg";



export default function LoaderPage(){
    return (
        <Fragment>
            <TypingEffect 
                text="بانوجان"
            />
            
            <div style={{border : "2px solid black",marginTop : "10px",marginBottom : "10px"}}></div>
            <div style={{border : "2px solid black",marginTop : "10px",marginBottom : "10px"}}></div>
            <TextFadeWithHeader
                headerText="بانوجان"
                contentText="افسانه نخواهی ماند"
            />

            <div style={{border : "2px solid black",marginTop : "10px",marginBottom : "10px"}}></div>
        </Fragment>
    )
}