"use client"
import styles from "./homePagePreloader.module.css";
// import the local elements 
import { BlurIn } from "@/components/common/BlurElements";
import Image from "next/image";
import {TextFadeWithHeader} from "@/components/common/LoadingText";
import brandLogo from "@/public/logo/Line_Art_Woman_Flower.svg";


export default function HomePagePreLoader(){
    return (
        <>
            <div className={styles["loader-wrapper"]}>
                <div className={styles["loader-widget-container"]}>
                {/* py-5 px-3 */}
                    <div className="px-3">
                        <BlurIn>
                            <Image
                                src={brandLogo}
                                alt="بانوجان"
                                width={100}
                                quality={100}
                                className="brightness-200"
                            />
                        </BlurIn>
                    </div>
                    {/* py-8 */}
                    <div className="">
                        <TextFadeWithHeader
                            headerText="بانوجان"
                            contentText="افسانه نخواهی ماند...."
                            headerTextColorCls="color-text-dark"
                            contentTextColorCls="color-bg-light"
                        />
                    </div>
                </div>
        
            </div>
        </>
    )

}



