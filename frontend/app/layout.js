'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/home/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { Providers } from "./components/providers/Providers";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "FinSpire",
//   description: "A fintech app for making finance easy for you",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthContextProvider>
            <Navbar />
            {children}
          </AuthContextProvider>
        </Providers>
      </body>
    </html>
  );
}
