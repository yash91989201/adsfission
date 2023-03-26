import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return scroll ? (
    <button
      className="fixed bottom-6 right-6 rounded-sm border border-primary-300 bg-white p-4 text-primary-300 hover:border-none hover:bg-primary-300 hover:text-white "
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  ) : (
    <></>
  );
}
