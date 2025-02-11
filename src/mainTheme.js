'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import "@/public/css/fonts.css";


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const mainTheme = createTheme({
  cssVariables: true,
  direction : "rtl",
  typography : {
    fontFamily : [
        "Aviny",
        "Aviny2",
        "VazirBold",
        "VazirRegular"
    ].join(",")
  },
  components : {
    MuiButton : {
      styleOverrides : {
        root : {
          "&.Mui-disabled" : {
             background: "#f3f3f3 !important",
             color: "#dadada !important"
          }
        }
      }
    }

  },
  palette: {
    mode: 'light',
  },
  // initial-palette
  // organizationalColors : {
  //   primary : {
  //     colorTextLight : "#333332",
  //     colorBgLight : "#FAF4E5",
  //     colorPinkLight : "#E5a1aa",
  //     colorGreenLight : "#7AD0AC",
  //     colorBlueLight : "#8395CD",
  //     colorTextDark : "#FAF4E5",
  //     colorBgDark : "#8395CD"
  //   }
  // },
  organizationalColors : {
    primary : {
      colorTextLight : "#FFFFFF",
      colorBgLight : "#FAF4E5",
      colorPinkLight : "#C896CB",
      colorGreenLight : "#7AD0AC",
      colorBlueLight : "#9C5DE9",
      colorTextDark : "#3D2B8E",
      colorBgDark : "#1E0D5D"
    }
  },
  
 
});

export default mainTheme;