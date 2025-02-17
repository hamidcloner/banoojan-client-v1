import { Fragment} from "react";







export default function ButtonEvent({btnTextEnable,btnTextDisable,btnDisable,btnType,btnClickHandler}){
    return (
        <Fragment>
            <button 
                className={`${btnDisable ? `bg-pink-500 cursor-not-allowed relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium rounded-lg dark:text-white mt-8` : `relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium rounded-lg hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 group-hover:from-purple-600 group-hover:to-blue-500 text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 mt-8 text-xl`}`}
                disabled={btnDisable}
                type={btnType}
                onClick={btnClickHandler}
            >
                <span 
                    className={`${btnDisable ? `relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent` : `rounded-md dark:bg-gray-900 px-5 py-2.5`}`}>
                    {btnDisable ? btnTextDisable : btnTextEnable}
                </span>
            </button>
        </Fragment>
 
    )
}