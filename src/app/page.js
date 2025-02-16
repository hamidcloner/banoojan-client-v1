"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import HomePagePreloader from "@/components/Preloader/homePagePreloader";

// export default function Home() {
//   const [isLoading,setIsLoading] = useState(true);
//   useEffect(() => {
//     const createLoadingLogic = () => {
//       setTimeout(() => {
//         setIsLoading(false);
//       },4000)
//     }
//     createLoadingLogic();
//   },[])
//   return (
//     isLoading ? (
//       <HomePagePreloader />
//     ) : (
//       <>
//              <h2 className="text-3xl font-bold underline">
//               Hello world!
//           </h2>
//           <ul>
//               <li>
//                 <Link href={`/auth/login`}>رمز یکبار مصرف</Link>
//               </li>
//               <li>
//                 <Link href={`/test/animate-text`}>تست متن های انیمیشن دار</Link>
//               </li>
//               <li>
//                 <Link href={`/test/drop`}>تست منوهای دراپ</Link>
//               </li>
//               <li>
                
//               </li>
//           </ul>        
//         <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
//         خوش آمدی بانوجان
//       </>
      
     
//     )
//   );
// }



// export default function Home() {
//   const [isLoading,setIsLoading] = useState(true);
//   const router = useRouter();
//   useEffect(() => {
//     const createLoadingLogic = () => {
//       setTimeout(() => {
//         setIsLoading(false);
//       },4000)
//     }
//     createLoadingLogic();
//   },[router])
//   return (
//     isLoading ? (
//       <HomePagePreloader />
//     ) : (
//       router.push("/auth/login")
//     )
//   );
// }


// export default function Home() {
//   const [isLoading,setIsLoading] = useState(true);
//   const router = useRouter();
//   useEffect(() => {
//     const createLoadingLogic = () => {
//       setTimeout(() => {
//         setIsLoading(false);
//       },4000)
//     }
//     createLoadingLogic();
//     console.log("isLoading : ",isLoading)
//     isLoading ? <HomePagePreloader /> : router.push("/auth/login")
//   },[isLoading])
//   return (
//     <></>
//   )
// }




export default function Home() {
  const [isLoading,setIsLoading] = useState(true);
  const router = useRouter();
 
  useEffect(() => {
    if(!isLoading){
      router.push("/auth/login")
    }
    const createLoadingLogic = () => {
      setTimeout(() => {
        setIsLoading(false);
      },2500)
    }
    createLoadingLogic();
  })
  return (
    <>
      <HomePagePreloader />
    </>
  )


}
