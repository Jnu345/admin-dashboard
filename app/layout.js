// app/layout.js
import { Inter } from "next/font/google";
 
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="flex max-md:flex-col max-w-screen max-md:overflow-y-auto
       md:max-h-screen max-md:pb-16 overflow-x-hidden h-fit
       bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-50">
        <Sidebar />
        <main className="flex-1 px-y max-w-screen overflow-x-hidden">
          {children}
        </main>
        <footer >
          <MobileNav />
        </footer>
      </body>
    </html>
  );
}
