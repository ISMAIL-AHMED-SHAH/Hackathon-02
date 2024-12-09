import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Load Josefin Sans font
const josefinSans = Josefin_Sans({
  subsets: ["latin"], 
  weight: ["100", "300", "400", "600", "700"], 
  variable: "--font-josefin-sans", 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body className="antialiased">
        <HeaderTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
