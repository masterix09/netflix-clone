import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "@/components/NextAuthProvider";

export default function LayoutHome({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
