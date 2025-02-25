'use client'
// import React, { useState } from 'react';
// import ReverseTimer from './timer';

// const Page = () => {
//   const [showTimer, setShowTimer] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
//       {showTimer && <ReverseTimer initialSeconds={60} />}
//     </div>
//   );
// };

// export default Page


// import React, { useState } from 'react';
// import ReverseTimer from './timer';

// const App = () => {
//   const [showTimer, setShowTimer] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
//       {showTimer && <ReverseTimer initialSeconds={60} />}
//     </div>
//   );
// };

// export default App;








import React, { useEffect, useState } from 'react';
import ReverseTimer,{SimpleChild} from './timer';
import OTPreverseTimer from '@/components/auth/OTPholder/OTPreverseTimer';

const App = () => {
  const [showTimer, setShowTimer] = useState(true);
  const [flag,setFlag] = useState(false)
  const [otpExpired,setOtpExpired] = useState(false)
  useEffect(() => {
    console.log("parent is rendered!!")
  })

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      <div></div>
      <button onClick={() => setFlag(!flag)}>CLICK ON ME TO CHANG ANOTHER FLAG</button>
      {/* {showTimer && <ReverseTimer initialSeconds={60} />} */}
      <ReverseTimer initialSeconds={60} />
      <SimpleChild showTimer={showTimer}/>
      {console.log("showTimer : ",showTimer)}
      <OTPreverseTimer otpExpired={otpExpired} setOtpExpired={setOtpExpired}/>
      {flag && <OTPreverseTimer otpExpired={otpExpired} setOtpExpired={setOtpExpired}/>}
    </div>
  );
};

export default App;

