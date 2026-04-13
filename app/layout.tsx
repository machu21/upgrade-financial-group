import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Add this import
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Create the font object

export const metadata: Metadata = {
  title: "Upgrade Financial Group",
  description: "Smart Protection. Real Living Benefits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}