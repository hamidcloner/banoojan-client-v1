"use client"


import { motion } from "framer-motion";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
  
const StaggeredDropDown = ({optionsList,skil,setSkil}) => {
    const [open, setOpen] = useState(false);
    // const [skil,setSkil] = useState("");

    const optionSelectedHandler = (e,skilValue) => {
      setOpen(false);
      setSkil(skilValue)
    }
  
    return (
      <div className="p-8 pb-56 flex items-center justify-center">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
          >
            <span className="font-medium text-xl font-aviny">مهارتت چیه؟</span>
            <motion.span variants={iconVariants}>
                <KeyboardArrowDownIcon />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            {optionsList && optionsList.map((option) => (
                <Option setOpen={setOpen} value={option.skilValue} title={option.title} key={option.id} Icon={option.icon} handler={optionSelectedHandler}/>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ value, Icon,title,handler }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={(e) => handler(e,value)}
        className="flex items-center gap-2 w-full p-2 text-xl font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{title}</span>
      </motion.li>
    );
  };
































//   const StaggeredDropDown = ({optionsList}) => {
//     const [open, setOpen] = useState(false);
  
//     return (
//       <div className="p-8 pb-56 flex items-center justify-center">
//         <motion.div animate={open ? "open" : "closed"} className="relative">
//           <button
//             onClick={() => setOpen((pv) => !pv)}
//             className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
//           >
//             <span className="font-medium text-xl font-aviny">مهارتت چیه؟</span>
//             <motion.span variants={iconVariants}>
//               {/* <FiChevronDown /> */}
//             </motion.span>
//           </button>
  
//           <motion.select
//             initial={wrapperVariants.closed}
//             variants={wrapperVariants}
//             style={{ originY: "top", translateX: "-50%" }}
//             className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
//           >
//             {/* <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
//             <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
//             <Option setOpen={setOpen} Icon={FiShare} text="Share" />
//             <Option setOpen={setOpen} Icon={FiTrash} text="Remove" /> */}
//             {optionsList && optionsList.map((option) => (
//                 // <Option key={option.id} value={option.skilValue}>{option.title}</Option>
//                 <Option 
//                 key={option.id}
//                 value={option.skilValue}
//                 title={option.title}
//                 />
//             ))}

//           </motion.select>
//         </motion.div>
//       </div>
//     );
//   };
  
//   const Option = ({ text, Icon, setOpen,value,title}) => {
//     return (
//       <motion.option
//         value={value}
//         variants={itemVariants}
//         onClick={() => setOpen(false)}
//         className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
//       >
//         {/* <motion.span variants={actionIconVariants}>
//         </motion.span>
//         <span>{text}</span> */}
//         {title}

//       </motion.option>
//     );
//   };
  
  export default StaggeredDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};