import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar showMenuHome={false} />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}