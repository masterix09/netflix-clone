import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import "../globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar showMenuHome={true} />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
