import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DXOHeader from "./components/Header";
import DXOImageSlider from "./components/ImageSlider"; // ✅ Import your slider
import DXOService from "./services/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DXO AC Conditioner Service",
  description: "Professional AC maintenance, repair, and installation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DXOHeader />
        <DXOImageSlider /> {/* ✅ This will show right after the header */}
        {/* <DXOService/> */}
        {children}
      </body>
    </html>
  );
}
