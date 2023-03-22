import type { ReactNode } from "react";
import Navbar from "../Shared/Navbar";

interface RootLayoutType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
