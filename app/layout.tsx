import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import {Footer} from "@/components/Footer";

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
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-b from-zinc-900 to-black text-foreground`}>
        
        <Navbar />
        
        {/* THE FIX: Added pt-36 (mobile) and pt-40 (desktop) to clear the tall navbar */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}