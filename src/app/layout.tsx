import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { Montserrat, Playfair_Display,Raleway } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const raleWay = Raleway({
  subsets: ["latin"],
  variable: "--font-raleWay",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spectrum",
  description: "Website of Spectrum-BPHC Physics association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${raleWay.variable} antialiased`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${playfair.variable} ${raleWay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
