import AppMUIConfigProvider from "@/MUIconfigProvider";
import AppProvider from "@/appProvider";
import "./globals.css";



export const metadata = {
  title: "بانو جان | راهکار نو در کسب و کار",
  description: "بانو جان راهکاری برای همه چیز",
  icons : {
    icon : '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fn" dir="rtl">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
