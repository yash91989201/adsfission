import type { ReactNode } from "react";
import Navbar from "../Shared/Navbar";
import ScrollToTop from "./ScrollToTop";

interface RootLayoutType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
    </>
  );
}
