"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import mainTheme from "@/mainTheme";
import RTLconfigProvider from "@/RTLConfig";



export default function AppMUIConfigProvider({children}){
    return (
        <>
            <RTLconfigProvider>
                <AppRouterCacheProvider options={{enableCssLayer : true}}>
                    <ThemeProvider theme={mainTheme}>
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </RTLconfigProvider>
        </>
    )
}


