"use client"
import AppMUIConfigProvider from "./MUIconfigProvider";
import { Provider } from "react-redux";
import rootStore from "@/features/store";
// import ServerErrorHandler from "@/api/api.ErrorHandler";



export default function AppProvider({children}){
    return (
        <Provider store={rootStore}>
            {/* <ServerErrorHandler /> */}
            <AppMUIConfigProvider>
                {children}
            </AppMUIConfigProvider>
        </Provider>
    )
}