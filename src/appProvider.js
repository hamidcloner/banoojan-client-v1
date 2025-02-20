"use client"
import AppMUIConfigProvider from "./MUIconfigProvider";
import useCheckUserAuth from "./hooks/useCheckUserAuth";
import { Provider } from "react-redux";
import rootStore from "@/features/store";
// import ServerErrorHandler from "@/api/api.ErrorHandler";



export default function AppProvider({children}){
    return (
        <Provider store={rootStore}>
            <AppMUIConfigProvider>
                {children}
            </AppMUIConfigProvider>
        </Provider>
    )
}