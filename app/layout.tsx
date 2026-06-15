import type { Metadata } from "next";
import { Inter } from "next/font/google";
// 1. Import the component
import { GoogleAnalytics } from '@next/third-parties/google'; 
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upgrade Financial Group",
  description: "Elite financial solutions, life insurance, and wealth strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`}>
        
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <Footer />

        {/* 2. Add the component with your Measurement ID */}
        <GoogleAnalytics gaId="G-LTVJ5WSCZF" />

      </body>
    </html>
  );
}