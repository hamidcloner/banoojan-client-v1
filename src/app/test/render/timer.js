// import React, { useState, useRef, useEffect } from 'react';

// const ReverseTimer = ({ initialSeconds }) => {
//   const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     // Start the timer when the component mounts
//     timerRef.current = setInterval(() => {
//       setSecondsLeft((prevSeconds) => {
//         if (prevSeconds === 0) {
//           clearInterval(timerRef.current);
//           return 0;
//         }
//         return prevSeconds - 1;
//       });
//     }, 1000);

//     // Clean up the timer when the component unmounts
//     return () => clearInterval(timerRef.current);
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div>
//       <h1>Time left: {secondsLeft} seconds</h1>
//       {console.log("child Component is Rendered")}
//     </div>
//   );
// };

// export default ReverseTimer




// import React, { useState, useRef, useEffect, memo } from 'react';

// const ReverseTimer = ({ initialSeconds }) => {
//   const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     // Start the timer when the component mounts
//     timerRef.current = setInterval(() => {
//       setSecondsLeft((prevSeconds) => {
//         if (prevSeconds === 0) {
//           clearInterval(timerRef.current);
//           return 0;
//         }
//         return prevSeconds - 1;
//       });
//     }, 1000);

//     // Clean up the timer when the component unmounts
//     return () => clearInterval(timerRef.current);
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div>
//       <h1>Time left: {secondsLeft} seconds</h1>
//     </div>
//   );
// };

// // Use React.memo to memoize the component
// export default memo(ReverseTimer);







// import React, { useState, useRef, useEffect, memo } from 'react';

// const ReverseTimer = memo(({ initialSeconds }) => {
//   const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
//   const timerRef = useRef(null);
//   const hasStartedRef = useRef(false); // Keep track of whether the timer has started

//   useEffect(() => {
//     if (!hasStartedRef.current) {
//       hasStartedRef.current = true;
//       timerRef.current = setInterval(() => {
//         setSecondsLeft((prevSeconds) => {
//           if (prevSeconds === 0) {
//             clearInterval(timerRef.current);
//             return 0;
//           }
//           return prevSeconds - 1;
//         });
//       }, 1000);
//     }

//     return () => clearInterval(timerRef.current);
//   }, []); 

//   return (
//     <div>
//       <h1>Time left: {secondsLeft} seconds</h1>
//       {console.log("child component is RENDERED")}
//     </div>
//   );
// });

// export default ReverseTimer;




import { useState,useEffect } from "react";
const ReverseTimer = () => {
    let [time,setTime] = useState(60);
    const [end,setEnd] = useState(false);
    useEffect(() => {
        const timerInterval = setInterval(() => {
            if(time > 0){
                setTime(time -1)
            }
            if(time = 0){
                setEnd(true)
            }
        },1000)
        return () => {
            clearInterval(timerInterval)
        }
    })
    return (
        
        <>
            <div style={{color : "white"}}>
                {!end ? <h1>time : {time}</h1> : <h1>END!!!!</h1>}
            </div>
        </>
    )
}

import {memo} from "react"
export const SimpleChild = memo(({showTimer}) => {
    return (
        <>
            {console.log("---------------------")}
            <div>I AM CHILD COMPONENT</div>
        </>
    )
})


export default ReverseTimer;

