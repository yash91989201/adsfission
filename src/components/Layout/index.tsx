import type { ReactNode } from "react";
import Navbar from "../Shared/Navbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

interface RootLayoutType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}
